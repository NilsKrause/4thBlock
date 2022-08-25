import { DefaultContents } from "./interfaces";
import { ErrSlotNotInteractable } from './errors';

export class Slot<Contents = DefaultContents> {
  public readonly interactable: boolean;
  public contents: Contents;

  public isInteractable(): boolean {
    return this.interactable;
  }

  public setContent(content: Contents): void {
    if (!this.isInteractable()) {
      throw ErrSlotNotInteractable;
    }
    this.contents = content;
  }
}
