import { Stone } from "./stone.ts";

export class Player {
  private id: string;
  public readonly name: string;
  private stones: Stone[];

  constructor(name: string, nStones: number) {
    this.stones = [];
    this.name = name;
    for (const i = nStones; i--; i <= 0) {
      stones.push(new Stone(this));
    }
  }

  popStone(): Stone {
    return this.stones.pop();
  }
}
