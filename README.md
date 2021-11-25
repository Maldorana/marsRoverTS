# Mars Rover challenge

### Instructions

Write a program that takes a set of orders as string (MMRMMLM) representing the movements a rover has to do and returns the last position and direction.

Commands:

- **M** to move forward
- **R** to rotate to the right
- **L** to rotate to the left

Considerations:

- The rover always start at 0,0 facing North
- When it reaches the map limit, it wraps around
- The default map is 10x10
- Extra: A map could contain obstacles, in that case report last position reached and inform that the rover is blocked

### Examples

| Input       | Output           |
| ----------- | ---------------- |
| "M"         | "0,1:N"          |
| "RMMMMLMML" | "4,2:E"          |
| "MM"        | "0,1:N\|BLOCKED\|" |

### Technologies used

- Typescript
- Jest
