import { Direction } from './Direction';
import { Position } from './Position';

const MAX_Y = 10;
const MAX_X = 10;

export class Map {
  moveNext(position: Position, direction: Direction): Position {
    let y = position.y;
    let x = position.x;

    if (direction.toString() === 'N') y = (y + 1) % MAX_Y;
    if (direction.toString() === 'E') x = (x + 1) % MAX_X;
    if (direction.toString() === 'S') y === 0 ? (y = MAX_Y - 1) : y--;
    if (direction.toString() === 'W') x === 0 ? (x = MAX_X - 1) : x--;

    return new Position(y, x);
  }
}
