export default class Character {
	constructor(attack) {
		this.attackPower = attack;
		this._stoned = false;
		this._distance = 1;
	}

	get stoned() {
		return this._stoned;
	}

	set stoned(value) {
		this._stoned = value;
	}

	get attack() {
		let baseAttack = this.attackPower * (1 - (this._distance - 1) * 0.1);

		if (this._stoned) {
			const stonedReduction = Math.log2(this._distance) * 5;
			baseAttack -= stonedReduction;
		}

		return Math.max(0, Math.round(baseAttack));
	}

	set attack(distance) {
		this._distance = distance;
	}
}