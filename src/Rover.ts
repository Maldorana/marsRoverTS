import { Direction } from './Direction';

export class Rover {
  private direction = new Direction();
  private position = '0,0';

  execute(commands: string): string {
    for (const command of commands) {
      if (command === 'R') this.direction.rotateRight();
      if (command === 'L') this.direction.rotateLeft();
      if (command === 'M') this.position = '1,0';
    }
    return `${this.position}:${this.direction}`;
  }
}
