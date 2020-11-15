import ICryptoSmuggler from './ICryptoSmuggler';
import { BaseClass } from '../BaseClass';
import { ISkills } from '../BaseClass/Skills';

class CryptoSmuggler<T extends BaseClass> extends BaseClass implements ICryptoSmuggler {
    constructor(skills : ISkills) {
        super(
            skills,
            "Crypto Smuggler"
        );
    }

    public getName() : string {
        return super.getName();
    }
}

export default CryptoSmuggler;