import ICryptoSmuggler from './ICryptoSmuggler';
import { BaseClass } from '../BaseClass';

class CryptoSmuggler<T extends BaseClass> extends BaseClass implements ICryptoSmuggler {
    constructor(skills : object) {
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