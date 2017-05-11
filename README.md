# webtask-slack-example

Patterned after [webtask-mailgun-example](https://github.com/graphcool-examples/webtask-mailgun-email-example)

Send notifications to a Slack Channel with Graphcool using [webtask](https://webtask.io/) and [Slack](https://slack.com).

## Getting started

This example shows how to use Mutation Callbacks in combination with webtask and Slack to send notification emails whenever a new comment is created in the Instagram clone project.

For more context, make sure to read [the full guide on implementing business logic with actions](https://graph.cool/docs/guides/implementing-business-logic-using-mutation-callbacks).


### 1. Environment setup

Sign up at [Slack](https://slack.com). From there, you will want to create a custom integration for a channel. You can find Custom Integrations by navigating to the main menu in the Slack App and selecting 'Apps & Integrations'. From there, search for 'Incomming WebHooks' > 'Add Configuration'. Save the URL Slack provides. Then sign up at [webtask](https://webtask.io/) and download the webtask cli with

```sh
npm install -g wt-cli -g
```

Now create a webtask and provide Slack's incomming-webhook URL from above as parameters:

```sh
wt create -s SLACK_WEBHOOK_URL=YOUR_URL webtask-slack.js --parse-body
```

Keep the webtask URL ready for the next step.

### 2. Create an action

At the action page in your project, choose 'Comment is created' as the trigger and enter the following query as the action handler payload:
```grapqhl
{
  createdNode {
    country
    city
  }
}
```

Enter the webtask URL from above as the handler URL and confirm to create the action.

### 3. Trigger the action

Trigger the action by creating a new user. A notification will be sent to your Slack Channel.

Optionally you can log the webtask with

```sh
wt logs
```
to see the action coming in.
