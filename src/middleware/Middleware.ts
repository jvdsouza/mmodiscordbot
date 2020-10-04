import { IMiddlewareHandler } from './interfaces';

class MiddlewareHandler implements IMiddlewareHandler {
    middlewareList;

    constructor() {
        this.middlewareList = [];
    }

    add() : any {
        return false;
    }

    check() : any {
        false;
    }
}

export default MiddlewareHandler;