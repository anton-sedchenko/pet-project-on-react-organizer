import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = mongoose;
const { model } = mongoose;

const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    diskSpace: {type: Number, default: 1024**3*10},
    usedSpace: {type: Number, default: 0},
    avatar: {type: String},
    files: [{type: ObjectId, ref: 'File'}]
}, { collection: 'UserDetails'});

const userDetails = model('User', User);

export default userDetails;
