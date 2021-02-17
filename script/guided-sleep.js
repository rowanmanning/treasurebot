'use strict';

const dotenv = require('dotenv');
const compose = require('../lib/compose');
const wait = require('../lib/wait');

dotenv.config();
run({
	slackToken: process.env.SLACK_TOKEN
});

async function run({slackToken}) {
	const messages = [
		`This guided sleep relaxation script will help you to fall into a deep, restful sleep.`,
		`Begin by lying on your back with your hands on your thighs or at your sides. You can change positions any time you need to in order to be more comfortable, but start by lying on your back for now.`,
		`Mentally scan your body for areas of tension. Make note of how your body feels. During this sleep relaxation session, you will focus on releasing any tension in your body, and on quieting the mind. Once the mind is calm and peaceful, you will easily drift into pleasant, restful sleep.`,
		`Breathe in, drawing in life-giving air and relaxation.`,
		`Exhale slowly, expelling any tension.`,
		`You might have thoughts about things you did today, or things you need to do tomorrow.`,
		`Perhaps you are worried about something or someone.`,
		`Now is the time to clear your mind for sleep, so tomorrow you will be refreshed and strong and can handle your duties and roles.`,
		`Now take a few moments to do the thinking you need to do before you sleep. Focus now on anything you need or want to think about before you go to sleep. For the next two minutes, do any worrying or thinking you decide to do. Now it is time to clear your mind for sleep. There is nothing else you need to be doing at this moment. Nothing you need to be thinking, except calm, relaxed thoughts.`,
		`Notice how your body feels right now.`,
		`Where in your body is today's tension stored? Focus your attention on the part of your body that feels most tense. Focus in on one small area of tension. Breathe in deeply, and then let that tension go as your breathe out with a sigh.`,
		`Notice where your body feels most relaxed. Let that feeling of relaxation grow with each breath. Spreading further and further the feeling of relaxation.`,
		`Feel your attention drifting as you become sleepy and calm. For the next few moments, you can choose to focus on counting, and become more relaxed as each number passes through your mind. Concentrate your attention on the number one.`,
		`As you count from one to ten, you will become more deeply relaxed. As you relax, you can allow your mind to drift into pleasant, refreshing sleep.`,
		`Count slowly with me... 1.... focusing on the number 1.....`,
		`2... you are more deeply relaxed.... deeper and deeper... calm. Peaceful.`,
		`3... feel the tension leaving your body... relaxation filling your body and mind. Concentrating just on the numbers.`,
		`Picture in your mind number 4. very relaxed. Calm.... tingly feeling of relaxation in your arms and legs.... very heavy... pleasantly heavy and relaxed.`,
		`Concentrating on number 5... as you drift deeper... deeper. Calm. Sleep washing over you. Peaceful.`,
		`6....deeply relaxed....`,
		`7.... your body and mind are very calm...`,
		`8... so very pleasant and heavy....`,
		`9...allowing your mind to drift...easily...no direction... floating....relaxing...`,
		`10... you are deeply relaxed....`,
		`Now you may count back down from 10 to 1. When you reach 1, you will be fully relaxed and drift into deep sleep. When I say start, slowly count on your own while I continue to talk.`,
		`Focus only on the numbers while I describe the relaxation experience. Start now at 10.... and very slowly focus on 9... and keep going on your own....`,
		`...as you become deeply relaxed... warm... heavy... peaceful...comfortable...`,
		`sleep relaxation...`,
		`pleasant and calm...`,
		`drifting...`,
		`drifting...`,
		`accepting...`,
		`sleep relaxation...`,
		`feeling very good and peaceful...`,
		`at peace with yourself...`,
		`confident...`,
		`nurturing...`,
		`refreshing sleep...`,
		`sleep relaxation...`,
		`deeply relaxed...`,
		`sleep deeply...`,
		`calm and relaxed...`,
		`quiet...`,
		`sleep relaxation...`,
		`smooth, even breathing...`,
		`warm and calm...`,
		`relaxed...`,
		`peaceful...`,
		`relaxed...`,
		`sleep relaxation...`,
		`allowing yourself to drift into deep sleep...`,
		`deep pleasant sleep relaxation ...`,
		`sleep...`
	];
	const channel = 'C01P0MWCBH6'; // The #tired channel on Financial Times
	for (const message of messages) {
		await compose(slackToken, {
			channel, 
			username: 'Guided Sleep Bot',
			icon_url: 'http://stuff.rowanmanning.com/img/guided-sleep.png',
			text: message
		});
		await wait(100);
	}
	await compose(slackToken, {
		channel,
		username: 'GUIDED SLEEP HOTLINE',
		icon_emoji: ':phone:',
		text: `
			WE HOPE YOU ENJOYED THIS GUIDED SLEEP SERVICE.
			
			PLEASE LET US KNOW THAT YOU ENJOYED THIS SERVICE
			BY TEXTING "MINDFULNESS" TO <tel:+447862127137|+44 7862 127 137>*

			* standard UK rates apply, your contact details are not stored
		`.trim().replace(/\t+/g, '')
	});
	console.log('✔ Done');
}

// Check message here:
// https://financialtimes.slack.com/archives/C01P0MWCBH6
