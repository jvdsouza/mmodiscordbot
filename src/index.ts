import * as Discord from 'discord.js';
import config from '../config';
import { messageMiddleware } from './middleware';
import commandsHandler from './commands';

const client = new Discord.Client();
// The beginning of remindey#3811

const prefix = config.BOT_PREFIX;

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    const parsedMessage = messageMiddleware(message, prefix);

    if (!parsedMessage.length) {
        return;
    }

    const [command, args] = parsedMessage;

    message.channel.send(commandsHandler(command, args));
});

client.login(config.DISCORD_TOKEN);