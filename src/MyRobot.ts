import { BCAbstractRobot, SPECS } from 'battlecode';

class MyRobot extends BCAbstractRobot {
  private step = 0;

  public turn(): Action | Falsy {
    this.step++;

    if (this.me.unit === SPECS.CRUSADER) {
      this.log(`Crusader health: ${this.me.health}`);

      const choices = [
        [0, -1],
        [1, -1],
        [1, 0],
        [1, 1],
        [0, 1],
        [-1, 1],
        [-1, 0],
        [-1, -1],
      ];

      const choice = choices[Math.floor(Math.random() * choices.length)];
      return this.move(choice[0], choice[1]);
    }

    if (this.me.unit === SPECS.CASTLE) {
      this.log(`Castle health: ${this.me.health}`);

      if (this.step % 10 === 0) {
        this.log(`Building a crusader at (${this.me.x + 1}, ${this.me.y + 1})`);
        return this.buildUnit(SPECS.CRUSADER, 1, 1);
      }
    }
  }
}

// Make sure to use the class so it's not removed by rollup
// tslint:disable-next-line no-unused-expression
new MyRobot();
