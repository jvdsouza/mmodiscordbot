# Discord mmo
An mmorpg made to be played in discord through a bot

----

## Installation
First you'll need a discord account and a bot account application to use/test.

You will also need the bot's discord token.

To create a bot and get the token, follow the instructions here: https://www.writebots.com/discord-bot-token/

Copy the `.env.example` file and name it `.env`, and copy the token into the newly created `.env` file.

Invite the bot to your discord server and type `npm run dev` into your terminal to run the development or type `npm run start:no-test` to run a production version.

commands should be placed in the path `./commands` and the various commands that can be run will be found in `./commands/index.ts`