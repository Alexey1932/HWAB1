import Magician from '../src/Magician';
import Daemon from '../src/Daemon';

test('Magician attack without stoned', () => {
	const magician = new Magician(100);
	magician.attack = 2;
	expect(magician.attack).toBe(90);
});

test('Magician attack with stoned', () => {
	const magician = new Magician(100);
	magician.stoned = true;
	magician.attack = 2;
	expect(magician.attack).toBe(85);
});

test('Daemon attack without stoned', () => {
	const daemon = new Daemon(100);
	daemon.attack = 3;
	expect(daemon.attack).toBe(80);
});

test('Daemon attack with stoned', () => {
	const daemon = new Daemon(100);
	daemon.stoned = true;
	daemon.attack = 3;
	expect(daemon.attack).toBe(72);
});

test('Daemon stoned getter/setter', () => {
	const daemon = new Daemon(100);
	daemon.stoned = true;
	expect(daemon.stoned).toBe(true);
	daemon.stoned = false;
	expect(daemon.stoned).toBe(false);
});

test('Magician stoned getter/setter', () => {
	const magician = new Magician(100);
	magician.stoned = true;
	expect(magician.stoned).toBe(true);
	magician.stoned = false;
	expect(magician.stoned).toBe(false);
});