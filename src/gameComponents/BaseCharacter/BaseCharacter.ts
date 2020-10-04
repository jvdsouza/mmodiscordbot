class BaseCharacter {
    private _HP;
    private _defence;
    private _magicDefence;
    private _resource;
    private _strength;
    private _intelligence;
    private _dexterity;

    constructor(
                    HP : Number, 
                    defence : Number, 
                    magicDefence : Number, 
                    resource : Number,
                    strength: Number,
                    intelligence: Number,
                    dexterity: Number,
                ) {
        this._HP = HP;
        this._resource = resource;
        this._HP = HP;
        this._defence = defence;
        this._magicDefence = magicDefence;
        this._resource = resource;
        this._strength = strength;
        this._intelligence = intelligence;
        this._dexterity = dexterity;
    }

    
    public get HP() : Number {
        return this._HP;
    }
    
    public set HP(HP : Number) {
        this._HP = HP;
    }

    public get defence() : Number {
        return this._defence;
    }
    
    public set defence(defence : Number) {
        this._defence = defence;
    }

    public get magicDefence() : Number {
        return this._magicDefence;
    }
    
    public set magicDefence(magicDefence : Number) {
        this._magicDefence = magicDefence;
    }

    public get resource() : Number {
        return this._resource;
    }
    
    public set resource(resource : Number) {
        this._resource = resource;
    }

    public get strength() : Number {
        return this._strength;
    }
    
    public set strength(strength : Number) {
        this._strength = strength;
    }

    public get intelligence() : Number {
        return this._intelligence;
    }
    
    public set intelligence(intelligence : Number) {
        this._intelligence = intelligence;
    }

    public get dexterity() : Number {
        return this._dexterity;
    }
    
    public set dexterity(dexterity : Number) {
        this._dexterity = dexterity;
    }
    
}

export default BaseCharacter;