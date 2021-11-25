const directions = ['N', 'E', 'S', 'W'];

export class Direction {
  private position = 0;

  rotateRight(): void {
    this.position++;
    if (this.position === 4) this.position = 0;
  }

  rotateLeft(): void {
    this.position--;
    if (this.position === -1) this.position = 3;
  }

  toString(): string {
    return directions[this.position];
  }
}
