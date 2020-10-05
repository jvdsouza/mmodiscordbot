import { BaseCharacter } from '../BaseCharacter';
import INPC from './INPC';

class NPC extends BaseCharacter implements INPC {
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

export default NPC;