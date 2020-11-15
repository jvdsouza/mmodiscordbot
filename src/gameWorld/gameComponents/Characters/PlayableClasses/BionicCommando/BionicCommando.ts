import IBionicCommando from './IBionicCommando';
import { BaseClass } from '../BaseClass';
import { ISkills } from '../BaseClass/Skills';

class BionicCommando<T extends BaseClass> extends BaseClass implements IBionicCommando {
    constructor(skills : ISkills) {
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