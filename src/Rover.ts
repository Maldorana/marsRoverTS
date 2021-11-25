import { Direction } from './Direction';

export class Rover {
  private direction = new Direction();

  execute(commands: string): string {
    for (const command of commands) {
      if (command === 'R') this.direction.rotateRight();
      if (command === 'L') this.direction.rotateLeft();
    }
    return `0,0:${this.direction}`;
  }
}
