import { ping } from './ping';
import { sneep } from './sneep';

const commandsHandler = (command : string, args : Array<string>) : string => {
    switch (command) {
        case "ping":
            return ping();
        case "sneep":
            return sneep();
        case "adddaily":
            return 'adddaily'
        case "dailyreminder":
            return 'dailyreminder';
        case "addweekly":
            return 'addweekly'
        case "weeklyreminder":
            return 'weeklyreminder';
        default:
            return;
    }
}

export default commandsHandler;