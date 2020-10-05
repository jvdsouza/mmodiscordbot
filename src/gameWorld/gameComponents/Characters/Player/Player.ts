import { BaseCharacter } from '../BaseCharacter';
import IPlayer from './IPlayer';

class Player extends BaseCharacter implements IPlayer {
    private _equipped;
    private _inventory;

}

export default Player;
