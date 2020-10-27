import { BaseCharacter } from '../BaseCharacter';
import { BaseClass } from '../PlayableClasses/BaseClass';
import IPlayer from './IPlayer';
import { Base } from 'discord.js';

class Player extends BaseCharacter implements IPlayer {
    private _equipped;
    private _inventory;
    private _class : BaseClass;

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
        super(
            name,
            HP,
            defence,
            magicDefence,
            resource,
            strength,
            intelligence,
            dexterity,
            accuracy,
            avoidability,
            level,
        );

        this._class;
    }

    public set playerClass(playerClass : BaseClass) {
        this._class = playerClass;
    }
}

export default Player;
