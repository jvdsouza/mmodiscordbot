import IBionicCommando from './IBionicCommando';
import { BaseClass } from '../BaseClass';

class BionicCommando<T extends BaseClass> extends BaseClass implements IBionicCommando {
    constructor(skills : object) {
        super(
            skills,
            "Bionic Commando"
        );
    }

    public getName() : string {
        return super.getName();
    }
}

export default BionicCommando;