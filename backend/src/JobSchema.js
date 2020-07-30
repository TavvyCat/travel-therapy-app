import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const schemaData = {
    type: String,
    required: true
}

const JobSchema = new Schema({
    title: {...schemaData},
    company: {...schemaData},
    facility: {...schemaData},
    occupation: {...schemaData},
    state: {...schemaData},
    city: {...schemaData},
    compensation: {
        type: Number,
        required: true
    },
    description: {...schemaData}
})

export default JobSchema;