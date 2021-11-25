import { Direction } from './Direction';
import { Position } from './Position';

export class Rover {
  private direction = new Direction();
  private position = new Position(0, 0);

  execute(commands: string): string {
    for (const command of commands) {
      if (command === 'R') this.direction.rotateRight();
      if (command === 'L') this.direction.rotateLeft();
      if (command === 'M') {
        if (this.direction.toString() === 'N') this.position.y++;
        if (this.direction.toString() === 'E') this.position.x++;
        if (this.direction.toString() === 'S') this.position.y--;
      }
    }
    return `${this.position}:${this.direction}`;
  }
}
