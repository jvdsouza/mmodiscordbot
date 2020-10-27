import IPsiAdept from './IPsiAdept';
import { BaseClass } from '../BaseClass';

class PsiAdept<T extends BaseClass> extends BaseClass implements IPsiAdept {
    constructor(skills : object) {
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