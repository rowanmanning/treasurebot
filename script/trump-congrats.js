'use strict';

const dotenv = require('dotenv');
const compose = require('../lib/compose');

dotenv.config();
run({
	slackToken: process.env.SLACK_TOKEN
});

async function run({slackToken}) {
	await compose(slackToken, {
		channel: 'C01NASJFL2W', // The #djt channel on Financial Times
		username: 'Donald Trump',
		icon_url: 'http://stuff.rowanmanning.com/img/trump-avatar.png',
		text: `It's a great feeling when you get a clue right. Great feeling. People always ask me about treasure hunts, It's fantastic. Let me tell you about treasure hunts. I do very well with treasure hunts. I love treasure hunts. No one loves treasure hunts more than me, BELIEVE ME. treasure hunts love me! We're going to have so many treasure hunts you are going to get sick of treasure.`
	});
	console.log('✔ Done');
}

// Check message here:
// https://financialtimes.slack.com/archives/C01NASJFL2W
