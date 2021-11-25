import { Rover } from '../src/Rover';
import { Map } from '../src/Map';
import { Position } from '../src/Position';

describe('Mars Rover Test', () => {
  describe('Initialisation', () => {
    it('should initialise the rover', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('')).toBe('0,0:N');
    });
  });
  describe('Rotating right', () => {
    it('should rotate the rover to the right (90°)', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('R')).toBe('0,0:E');
    });
    it('should rotate the rover to the right (180°)', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('RR')).toBe('0,0:S');
    });
    it('should rotate the rover to the right (270°)', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('RRR')).toBe('0,0:W');
    });
    it('should rotate the rover to the right (360°)', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('RRRR')).toBe('0,0:N');
    });
  });
  describe('Rotating left', () => {
    it('should rotate the rover to the left (90°)', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('L')).toBe('0,0:W');
    });
    it('should rotate the rover to the left (360°)', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('LLLL')).toBe('0,0:N');
    });
  });
  describe('Changing position', () => {
    it('should move the rover 1 position up', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('M')).toBe('1,0:N');
    });
    it('should move the rover 2 positions up', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('MM')).toBe('2,0:N');
    });
    it('should move the rover 1 position right', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('RM')).toBe('0,1:E');
    });
    it('should move the rover 2 position down', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('MMMRRMM')).toBe('1,0:S');
    });
    it('should move the rover 2 position left', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('RMMMLLMM')).toBe('0,1:W');
    });
  });
  describe('Wrap the map', () => {
    it('should wrap the map when rover moves too far up', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('MMMMMMMMMMM')).toBe('1,0:N');
    });
    it('should wrap the map when rover moves too far down', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('RRM')).toBe('9,0:S');
    });
    it('should wrap the map when rover moves too far right', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('RMMMMMMMMMM')).toBe('0,0:E');
    });
    it('should wrap the map when rover moves too far left', () => {
      const map = new Map();
      const rover = new Rover(map);
      expect(rover.execute('LMM')).toBe('0,8:W');
    });
  });
  describe('Get stuck and report obstacles', () => {
    it('should detect and report an obstacle', () => {
      const obstacle = new Position(1, 0);
      const map = new Map([obstacle]);
      const rover = new Rover(map);
      expect(rover.execute('M')).toBe('0,0:N|BLOCKED|');
    });
  });
});
