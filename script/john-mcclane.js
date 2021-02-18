'use strict';

const dotenv = require('dotenv');
const compose = require('../lib/compose');

dotenv.config();

run({
	slackToken: process.env.SLACK_TOKEN
});

async function run({slackToken}) {
	await compose(slackToken, {
		channel: 'C025C95N0', // The #general channel on Financial Times
		thread_ts: '1472563250.000004', // Rowan's 2016 message thread
		username: 'John McClane',
		icon_url: 'http://stuff.rowanmanning.com/img/john-mcclane.jpg',
		text: `
			McClane here. When I'm not fighting terrorists, I love to kick back and read my favourite newspaper: the FT.

			I'm supposed to give you a clue for some treasure hunt run by a couple of the nerds you employ. Let's start with something you probably all know off by heart: *what year did the FT start printing on light pink paper?*

			Text your answer to <tel:+447862127137|+44 7862 127 137>*

			* standard UK rates apply, your contact details are not stored
		`.trim().replace(/\t+/g, '')
	});
	console.log('✔ Done');
}

// Check message here:
// https://financialtimes.slack.com/archives/C025C95N0/p1472563250000004
