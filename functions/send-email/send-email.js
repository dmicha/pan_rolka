const SparkPost = require("sparkpost")
const client = new SparkPost(process.env.SPARKPOST)

exports.handler = function (request, event, context, callback) {
  client.transmissions.send({
    content: {
      from: request.body.email,
      subject: `Nowy mail od ${request.body.name}`,
      html: request.body.message,
    },
    recipients: [{ address: "d.michalak@gmail.com" }],
  })
}
