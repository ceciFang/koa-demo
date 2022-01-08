// function a(ctx) {
//   ctx, body = {
//     mesg: 'hello word! where is a.'
//   }
// }

// module.exports = {
//   a
// }

// 业务代码
module.exports = function (ctx) {
  console.log(ctx)
  ctx.body = {
   'message':'hello word! where is a. !!!'
  }
}