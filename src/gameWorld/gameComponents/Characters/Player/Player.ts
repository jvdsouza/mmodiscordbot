import { BaseCharacter } from '../BaseCharacter';
import IPlayer from './IPlayer';

class Player extends BaseCharacter implements IPlayer {
    private _equipped;
    private _inventory;
    private _class;

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
    }
}

export default Player;
