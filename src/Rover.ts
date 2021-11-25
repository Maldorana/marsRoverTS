import { Direction } from './Direction';
import { Position } from './Position';
import { Map } from './Map';

export class Rover {
  private direction = new Direction();
  private position = new Position(0, 0);
  private map = new Map();

  execute(commands: string): string {
    for (const command of commands) {
      if (command === 'R') this.direction.rotateRight();
      if (command === 'L') this.direction.rotateLeft();
      if (command === 'M') {
        this.position = this.map.moveNext(this.position, this.direction);
      }
    }
    return `${this.position}:${this.direction}`;
  }
}
