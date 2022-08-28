import { Player } from './player';
import { Grid, Position, D2 } from './interfaces';
import { ErrNotEnoughPlayers } from './errors';

export class Game {
  private id: string
  private players: Player[];
  private round: number;
  private turn: number; // it just represents the index of the players
  private grid: Grid<D2>;

  constructor(players: Player[], grid: Grid<D2>) {
    if (players.length < 2) {
      throw ErrNotEnoughPlayers;
    }

    this.grid = grid;
    this.players = players;
    this.turn = 0;
    this.round = 0;
  }

  public getRound(): number {
    return this.round;
  }

  public passTurn(): void {
    if (this.players.length - 1 === this.turn) {
      this.turn = 0;
      this.round += 1;
    } else {
      this.turn += 1;
    }
  }

  public placeStone(pos: Position<D2>): void {
    this.grid.getAtPosition(pos).setContent(this.players[this.turn].popStone());
  }
}
