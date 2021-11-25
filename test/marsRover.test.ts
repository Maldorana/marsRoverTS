import { Rover } from '../src/Rover';

describe('Mars Rover Test', () => {
  describe('Initialisation', () => {
    it('should initialise the rover', () => {
      const rover = new Rover();
      expect(rover.execute('')).toBe('0,0:N');
    });
  });
  describe('Rotating right', () => {
    it('should rotate the rover to the right (90°)', () => {
      const rover = new Rover();
      expect(rover.execute('R')).toBe('0,0:E');
    });
    it('should rotate the rover to the right (180°)', () => {
      const rover = new Rover();
      expect(rover.execute('RR')).toBe('0,0:S');
    });
    it('should rotate the rover to the right (270°)', () => {
      const rover = new Rover();
      expect(rover.execute('RRR')).toBe('0,0:W');
    });
    it('should rotate the rover to the right (360°)', () => {
      const rover = new Rover();
      expect(rover.execute('RRRR')).toBe('0,0:N');
    });
  });
  describe('Rotating left', () => {
    it('should rotate the rover to the left (90°)', () => {
      const rover = new Rover();
      expect(rover.execute('L')).toBe('0,0:W');
    });
    it('should rotate the rover to the left (360°)', () => {
      const rover = new Rover();
      expect(rover.execute('LLLL')).toBe('0,0:N');
    });
  });
  describe('Changing position', () => {
    it('should move the rover 1 position up', () => {
      const rover = new Rover();
      expect(rover.execute('M')).toBe('1,0:N');
    });
    it('should move the rover 2 positions up', () => {
      const rover = new Rover();
      expect(rover.execute('MM')).toBe('2,0:N');
    });
    it('should move the rover 1 position right', () => {
      const rover = new Rover();
      expect(rover.execute('RM')).toBe('0,1:E');
    });
    it('should move the rover 2 position down', () => {
      const rover = new Rover();
      expect(rover.execute('MMMRRMM')).toBe('1,0:S');
    });
  });
});
