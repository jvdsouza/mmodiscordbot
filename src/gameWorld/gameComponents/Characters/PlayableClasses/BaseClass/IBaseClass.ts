import { ISkill } from './Skills';

interface BaseClass {
    getName() : string;
    getSkill(skillName : string) : ISkill;
}

export default BaseClass;
