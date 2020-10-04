const messageMiddleware = (message, chosenPrefix) => {
    if (!message.content.startsWith(chosenPrefix) || message.author.bot) return [];
    
    const args = message.content.slice(chosenPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    return [command, args];
} 

export default messageMiddleware;