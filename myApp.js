/**********************************************
* 3. FCC Task Tracker
* ==================================
***********************************************/

/** # MONGOOSE SETUP #
/*  ================== */


const mongoose = require("mongoose");
const Schema = mongoose.Schema
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true },)

//----------------------------------------------------------------------------------

const idFilter = (id) => {return { _id: id }}
const userIdFilter = (id) => {return { userId: id }}
const nameFilter = (name) => {return { username: name }}

const userSchema = new Schema({ username: String })

const User = mongoose.model('User', userSchema)

//----------------------------------------------------------------------------------

const exerciseFilter = (a, b, c, d) => {
  let res = {};
  if (a) res.userId = a;
  if (b) res.description = b;
  if (c) res.duration = c;
  if (d) res.date = d;
  return res
}

const ExerciseSchema = new Schema({
  userId: String,
  description: String,
  duration: Number,
  date: Date
})

const Exercise = mongoose.model('Exercise', ExerciseSchema) 

//----------------------------------------------------------------------------------

exports.mongoose = mongoose;
exports.User = User;
exports.Exercise = Exercise;
exports.idFilter = idFilter;
exports.nameFilter = nameFilter;
exports.exerciseFilter = exerciseFilter;
