const aws = require('aws-sdk')
aws.config.update({
  accessKeyId: "AKIAJL4PARAP76H6O2CA",
  secretAccessKey: "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",
  region: "us-east-1"
});
const ses = new aws.SES()
var params = {
  Destination: {
    ToAddresses: ['info@makersmarket.co.in']
  },
  Source: 'info@makersmarket.co.in',
  Message: {
    Body: {
      Text: {
        Charset: 'UTF-8',
        Data: "Hey"
      }
    },
    Subject: {
      Data: 'Hey, I wanted to contact you!'
    }
  }
}
ses.sendEmail(params, (err, data) => {
  if (err) {
    console.log("Error in sending email")
    session.send("There was an error in sending email. Please try again")
    console.log(err)
    session.endDialogWithResult({
      response: false
    })
  }
  console.log("data", data)
  session.send('Saved!')
  session.endDialogWithResult({
    response: true
  })
})
