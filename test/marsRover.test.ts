import { Rover } from '../src/Rover';

describe('Mars Rover Test', () => {
  it('should initialize the rover', () => {
    const rover = new Rover();
    expect(rover.execute('')).toBe('0,0:N');
  });
});
