'use strict';

const dotenv = require('dotenv');
const compose = require('../lib/compose');

dotenv.config();

run({
	slackToken: process.env.SLACK_TOKEN
});

async function run({slackToken}) {
	await compose(slackToken, {
		channel: 'C01N7PWTLKF', // The #212 channel on Financial Times
		username: 'Party JK',
		icon_url: 'http://stuff.rowanmanning.com/img/party-jk.png',
		text: `
			Well done! You’re on the right track :treasure-chest:

			:party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk:
			*In <https://groups.google.com/a/ft.com/g/all.ft.product.technology/c/LScrc2-fa2g|my first weekly update after working from home>, I gave you five tips.*
			To find your next clue, find a Google Slide Deck named after #2.
			:party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk::party-jk:
		`.trim().replace(/\t+/g, '')
	});
	console.log('✔ Done');
}

// Check message here:
// https://financialtimes.slack.com/archives/C01N7PWTLKF
