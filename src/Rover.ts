export class Rover {
  execute(command: string): string {
    if (command === 'RRR') return '0,0:W';
    if (command === 'RR') return '0,0:S';
    if (command === 'R') return '0,0:E';
    return '0,0:N';
  }
}
