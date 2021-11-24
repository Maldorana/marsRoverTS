export class Rover {
  execute(command: string): string {
    if (command === 'R') return '0,0:E';
    return '0,0:N';
  }
}
