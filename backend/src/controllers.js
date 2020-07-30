import mongoose from 'mongoose';
import JobSchema from './JobSchema';

const Job = mongoose.model('Job', JobSchema);

export const addNewJob = (req, res) => {
    let newJob = new Job(req.body);

    newJob.save((err, Job) => {
        if (err) {
            res.send(err);
        }
        res.json(Job);
    });
};

export const getJobs = (req, res) => {
    Job.find({}, (err, Job) => {
        if (err) {
            res.send(err);
        }
        res.json(Job);
    });
};

export const getJobWithId = (req, res) => {
    Job.findById(req.params.JobId, (err, Job) => {
        if (err) {
            res.send(err);
        }
        res.json(Job);
    });
};

export const updateJob = (req, res) => {
    Job.findOneAndUpdate({ _id: req.params.JobId}, 
    req.body, {new: true}, (err, Job) => {
        if (err) {
            res.send(err);
        }
        res.json(Job);
    });
};

export const deleteJob = (req, res) => {
    Job.deleteOne({ _id: req.params.JobId}, (err, Job) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: "Successfully deleted Job."});
    });
};