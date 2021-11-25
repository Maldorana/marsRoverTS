import { Direction } from './Direction';

export class Rover {
  private direction = new Direction();
  private y = 0;

  execute(commands: string): string {
    for (const command of commands) {
      if (command === 'R') this.direction.rotateRight();
      if (command === 'L') this.direction.rotateLeft();
      if (command === 'M') this.y++;
    }
    return `${this.y},0:${this.direction}`;
  }
}
