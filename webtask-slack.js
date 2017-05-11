var request = require('request');

module.exports = (context, req, res) => {
  const SLACK_WEBHOOK_URL = context.secrets.SLACK_WEBHOOK_URL

  if (!SLACK_WEBHOOK_URL) {
    console.log('Slack Webhook URL missing.')
    return res.end('Slack Webhook URL missing.')
  }

  var user = context.data.createdNode

  console.log(`City: ${user.city}, Country ${user.country}`)
  
  if (user.city && user.country){
    var location = `${user.city}, ${user.country}`
  }else{
    var location = 'somewhere on planet earth.'
  }

  var text = `A new user signed up from ${location}`

  request({
    method: 'post',
    body: {"text": text},
    json: true,
    url: SLACK_WEBHOOK_URL
  })
}
