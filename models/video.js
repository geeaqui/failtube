// module.exports =[
// 	  {
//     id: 0,
//     title: "epic fish fail",
//     description: "a video of a woman being smacked in the face with a fish",
//     url: "ITHKAu4xmNg",
//     failLevel: 7,
//     nsfw: false
//   },
//   {
//     id: 1,
//     title: "epic seal fail",
//     description: "a seal rolls down a hill",
//     url: "PatRWY1WzdQ",
//     failLevel: 5,
//     nsfw: false
//   },
//   {
//     id: 2,
//     title: "epic cake fail",
//     description: "a cake falls over",
//     url: "e4_r3haQ1Bk",
//     failLevel: 2,
//     nsfw: false
//   },
//   {
//     id: 3,
//     title: "epic face fail",
//     description: "a cake falls over",
//     url: "_L7Qqr3qcgQ",
//     failLevel: 8,
//     nsfw: false
//   }
// ]

var mongoose = require('mongoose');

var VideoSchema = mongoose.Schema({
  title: String,
  description: String,
  url: String,
  failLevel:Number,
  nsfw:Boolean
});


module.exports = mongoose.model('Videos', VideoSchema);