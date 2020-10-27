import IBaseClass from './IBaseClass';

class BaseClass implements IBaseClass {
    private _skills;
    private _name;
    constructor(skills : object, name: string) {
        this._skills = skills;
        this._name = "";
    }

    public getName() : string {
        return this._name;
    }
}

export default BaseClass;