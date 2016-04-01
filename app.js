(function() {

'use strict';

const Logger = require('./interfaces/logger');
const env = require('node-env-file');
env(__dirname + '/.env');

// Create logger
let logger = new Logger();

// Init DB
const DbInit = require('./db/dbinit');

new DbInit(logger);

// Webservice bootstrap
const Server = require('./webservice/server');
const GetActivitiesUseCase = require('./usecases/getactivities');
const ActivityMapper = require('./model/activitymapper');
const ActivityRepository = require('./model/activityrepository');
const ActivityModel = require('./db/activitymodel');

let activityRepository = new ActivityRepository(logger, ActivityMapper, ActivityModel);
let getActivitiesUseCase = new GetActivitiesUseCase(activityRepository);

new Server(logger, getActivitiesUseCase);

// Broker bootstrap
const Broker = require('./messagebroker/broker');
const SaveActivityUseCase = require('./usecases/saveactivity');

let saveActivityUseCase = new SaveActivityUseCase(activityRepository);

let broker = new Broker(logger, saveActivityUseCase);

})();