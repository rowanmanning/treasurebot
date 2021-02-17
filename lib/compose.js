'use strict';

const {WebClient} = require('@slack/web-api');

module.exports = async function compose(slackToken, message) {
	const slack = new WebClient(slackToken);
	const result = await slack.chat.postMessage(message);
	return result;
};
