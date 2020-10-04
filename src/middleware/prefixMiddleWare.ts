const checkPrefix = (prefix : string, message) : boolean => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return false;
    }
    
    return true;
}
export default checkPrefix;