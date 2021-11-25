import { Rover } from '../src/Rover';

describe('Mars Rover Test', () => {
  describe('Initialisation', () => {
    it('should initialise the rover', () => {
      const rover = new Rover();
      expect(rover.execute('')).toBe('0,0:N');
    });
  });
  describe('Rotating', () => {
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
});
