import { BaseCharacter } from '../BaseCharacter';
import IMonster from './IMonster';

class Monster extends BaseCharacter implements IMonster {
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

export default Monster;