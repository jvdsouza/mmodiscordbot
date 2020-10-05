abstract class BaseItem {
    private _name;
    private _description;

    constructor(name : string, description : string) {
        this._name = name;
        this._description = description;
    }

    
    public get name() : string {
        return this._name;
    }

    
    public set name(name : string) {
        this._name = name;
    }
       
    public get description() : string {
        return this._description;
    }

    
    public set description(description : string) {
        this._description = description;
    }
}

export default BaseItem;