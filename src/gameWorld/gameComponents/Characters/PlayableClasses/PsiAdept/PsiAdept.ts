import IPsiAdept from './IPsiAdept';
import { BaseClass } from '../BaseClass';
import { ISkills } from '../BaseClass/Skills';

class PsiAdept<T extends BaseClass> extends BaseClass implements IPsiAdept {
    constructor(skills : ISkills) {
        super(
            skills,
            "Psi Adept"
        );
    }

    public getName() : string {
        return super.getName();
    }
}

export default PsiAdept;