import { Direction } from './Direction';
import { Position } from './Position';

export class Map {
  moveNext(position: Position, direction: Direction): Position {
    let y = position.y;
    let x = position.x;

    if (direction.toString() === 'N') y++;
    if (direction.toString() === 'E') x++;
    if (direction.toString() === 'S') y--;
    if (direction.toString() === 'W') x--;

    return new Position(y, x);
  }
}
