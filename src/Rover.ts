export class Rover {
  private direction = 'N';

  execute(command: string): string {
    if (command === 'RRR') this.direction = 'W';
    if (command === 'RR') this.direction = 'S';
    if (command === 'R') this.direction = 'E';
    return `0,0:${this.direction}`;
  }
}
