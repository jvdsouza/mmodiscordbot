import IBaseClass from './IBaseClass';
import { ISkill, ISkills }  from './Skills'; 

class BaseClass implements IBaseClass {
    private _skills : ISkills;
    private _name : string;
    constructor(skills : ISkills, name: string) {
        this._skills = skills;
        this._name = "";
    }

    public getSkill(skillName : string) : ISkill {
        return this._skills[skillName] ? this._skills[skillName] : undefined;
    }

    public getName() : string {
        return this._name;
    }
}

export default BaseClass;