import {
  ErrInvalidDimension,
  ErrInvalidPosition,
  ErrNotEnoughPlayers,
} from "./errors.ts";
import { Player } from "./player.ts";
import { Slot } from "./slot";
import { D2, Grid, Position } from "./interfaces.ts";

export class D2Grid implements Grid<D2> {
  private slots: Map<string, Slot>;

  public getAtPosition(pos: D2Pos): Slot {
    const slot = this.slots.get(pos.asString());
    if (slot === undefined) {
      throw ErrInvalidPosition;
    }

    return slot;
  }
}
