'use strict';

const dotenv = require('dotenv');
const compose = require('../lib/compose');

dotenv.config();
run({
	slackToken: process.env.SLACK_TOKEN
});

async function run({slackToken}) {
	const channel = 'C01NASJFL2W'; // The #djt channel on Financial Times
	await compose(slackToken, {
		channel,
		username: 'Donald Trump',
		icon_url: 'http://stuff.rowanmanning.com/img/trump-avatar.png',
		text: `It's a great feeling when you get a clue right. Great feeling. People always ask me about treasure hunts, It's fantastic. Let me tell you about treasure hunts. I do very well with treasure hunts. I love treasure hunts. No one loves treasure hunts more than me, BELIEVE ME. treasure hunts love me! We're going to have so many treasure hunts you are going to get sick of treasure.`
	});
	await compose(slackToken, {
		channel,
		username: 'Joe Exotic',
		icon_url: 'http://stuff.rowanmanning.com/img/joe-exotic-avatar.png',
		text: `Hey Donny thats great but what about the pardon you promised me?`
	});
	await compose(slackToken, {
		channel,
		username: 'Donald Trump',
		icon_url: 'http://stuff.rowanmanning.com/img/trump-avatar.png',
		text: `The what?`
	});
	await compose(slackToken, {
		channel,
		username: 'Joe Exotic',
		icon_url: 'http://stuff.rowanmanning.com/img/joe-exotic-avatar.png',
		text: `The pardon`
	});
	await compose(slackToken, {
		channel,
		username: 'Donald Trump',
		icon_url: 'http://stuff.rowanmanning.com/img/trump-avatar.png',
		text: `That who promised?`
	});
	await compose(slackToken, {
		channel,
		username: 'Joe Exotic',
		icon_url: 'http://stuff.rowanmanning.com/img/joe-exotic-avatar.png',
		text: `You`
	});
	await compose(slackToken, {
		channel,
		username: 'Donald Trump',
		icon_url: 'http://stuff.rowanmanning.com/img/trump-avatar.png',
		text: `Go ahead next question please`
	});
	await compose(slackToken, {
		channel,
		username: 'Joe Exotic',
		icon_url: 'http://stuff.rowanmanning.com/img/joe-exotic-avatar.png',
		text: `I guess Donny is team Baskin - y'all want to <https://www.theft.lol/|help me with this word search>?`
	});
	console.log('✔ Done');
}

// Check message here:
// https://financialtimes.slack.com/archives/C01NASJFL2W
