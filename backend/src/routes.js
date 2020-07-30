import { 
    addNewJob,
    getJobs,
    getJobWithId,
    updateJob,
    deleteJob
} from './controllers';

const routes = (app) => {
    app.route('/Jobs')

    // GET all Jobs
        .get(getJobs)

    // POST new Job
        .post(addNewJob)

    app.route('/Job/:JobId')

    // GET specific Job
        .get(getJobWithId)

    // UPDATE specific Job
        .put(updateJob)
        
    // DELETE specific Job
        .delete(deleteJob)

};

export default routes;