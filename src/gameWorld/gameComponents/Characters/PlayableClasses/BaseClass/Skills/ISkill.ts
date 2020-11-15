interface ISkill {
    getName() : string;
    isActiveSkill() : boolean;
    getDescription() : string;
    getPower() : number;
    getBuff() : Record<string, number>;
    getEnemyDebuff() : Record<string, number>;
    getStatusAffliction() : Record<string, number>;
    getCooldown() : number;
    getRemainingCooldown() : number;
};

export default ISkill;