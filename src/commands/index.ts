import { ping } from './ping';
import { sneep } from './sneep';

const commandsHandler = (command : string, args : Array<string>) : string => {
    switch (command) {
        case "ping":
            return ping();
        case "sneep":
            return sneep();
        default:
            return;
    }
}

export default commandsHandler;