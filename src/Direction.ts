const directions = ['N', 'E', 'S', 'W'];

export class Direction {
  private position = 0;

  rotateRight(): void {
    this.position++;
  }

  toString(): string {
    return directions[this.position];
  }
}
