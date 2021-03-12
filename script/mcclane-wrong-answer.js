'use strict';

const dotenv = require('dotenv');
const compose = require('../lib/compose');

dotenv.config();
run({
	slackToken: process.env.SLACK_TOKEN
});

async function run({slackToken}) {
	// The various wrong number channels on Financial Times
	const channels = [
		'C01NASM1A58',
		'C01NH25PD44',
		'C01QVHW8F3Q',
	];
	for (const channel of channels) {
		await compose(slackToken, {
			channel,
			username: 'John McClane',
			icon_url: 'http://stuff.rowanmanning.com/img/john-mcclane.jpg',
			text: `
				You're on the right track, but this isn't the next clue.
			`.trim().replace(/\t+/g, '')
		});
	}
	console.log('✔ Done');
}

// Check messages here:
// https://financialtimes.slack.com/archives/C01NASM1A58
// https://financialtimes.slack.com/archives/C01NH25PD44
// https://financialtimes.slack.com/archives/C01QVHW8F3Q
