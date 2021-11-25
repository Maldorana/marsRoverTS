import { Direction } from './Direction';

export class Rover {
  private direction = new Direction();

  execute(commands: string): string {
    for (let command of commands) {
      if (command === 'R') this.direction.rotateRight();
    }
    return `0,0:${this.direction}`;
  }
}
