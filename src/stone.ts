import { Player } from './player';

export class Stone {
  private owner: Player;
  private placeable: boolean;

  constructor(owner: Player, placable?: boolean) {
    this.owner = owner;
    this.placeable = placable ?? true;
  }

  public getOwner(): Player {
    return this.owner;
  }

  public isPlacable(): boolean {
    return this.placeable;
  }
}
