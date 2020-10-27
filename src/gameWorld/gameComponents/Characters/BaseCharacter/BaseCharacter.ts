abstract class BaseCharacter {
    private _name;
    private _HP;
    private _defence;
    private _magicDefence;
    private _resource;
    private _strength;
    private _vitality;
    private _intelligence;
    private _wisdom;
    private _dexterity;
    private _cunning;
    private _accuracy;
    private _avoidability
    private _level;
    private _secondaryStatScaling = 2/3;

    constructor(
                    name : string,
                    HP : number, 
                    defence : number, 
                    magicDefence : number, 
                    resource : number,
                    strength: number,
                    intelligence: number,
                    dexterity: number,
                    accuracy: number,
                    avoidability: number,
                    level: number,
                ) {
        this._name = name;
        this._HP = HP;
        this._resource = resource;
        this._HP = HP;
        this._defence = defence;
        this._magicDefence = magicDefence;
        this._resource = resource;
        this._strength = strength;
        this._vitality = this._secondaryStatScaling * strength;
        this._intelligence = intelligence;
        this._wisdom = this._secondaryStatScaling * intelligence;
        this._dexterity = dexterity;
        this._cunning = this._secondaryStatScaling * dexterity;
        this._accuracy = accuracy;
        this._avoidability = avoidability;
        this._level = level;
    }

    public get name() : string {
        return this._name;
    }
    
    public set name(name : string) {
        this._name = name;
    }
    
    public get HP() : number {
        return this._HP;
    }
    
    public set HP(HP : number) {
        this._HP = HP;
    }

    public get defence() : number {
        return this._defence;
    }
    
    public set defence(defence : number) {
        this._defence = defence;
    }

    public get magicDefence() : number {
        return this._magicDefence;
    }
    
    public set magicDefence(magicDefence : number) {
        this._magicDefence = magicDefence;
    }

    public get resource() : number {
        return this._resource;
    }
    
    public set resource(resource : number) {
        this._resource = resource;
    }

    public get strength() : number {
        return this._strength;
    }
    
    public set strength(strength : number) {
        this._strength = strength;
        this._vitality = this._secondaryStatScaling * strength;
    }

    public get vitality() : number {
        return this._vitality;
    }

    public get intelligence() : number {
        return this._intelligence;
    }
    
    public set intelligence(intelligence : number) {
        this._intelligence = intelligence;
        this._wisdom = this._secondaryStatScaling * intelligence;
    }

    public get wisdom() : number {
        return this._wisdom;
    }

    public get dexterity() : number {
        return this._dexterity;
        this._cunning = this._secondaryStatScaling * this.dexterity;
    }
    
    public set dexterity(dexterity : number) {
        this._dexterity = dexterity;
    }

    public get cunning() : number {
        return this._cunning;
    }

    public get accuracy() : number {
        return this._accuracy;
    }
    
    public set accuracy(accuracy : number) {
        this._accuracy = accuracy;
    }

    public get avoidability() : number {
        return this._avoidability;
    }
    
    public set avoidability(avoidability : number) {
        this._avoidability = avoidability;
    }

    public get level() : number {
        return this._level;
    }
    
    public set level(level : number) {
        this._level = level;
    }
    
}

export default BaseCharacter;