import { ErrInvalidDimension } from './errors';
import { Position, D2, Index } from './interfaces';

export class D2Pos implements Position<D2> {
  private dimensions: number[];

  constructor(x: number = 0, y: number = 0) {
    this.dimensions = [x, y];
  }

  asString(): string {
    return `${this.dimensions[0]}${this.dimensions[1]}`;
  }

  getDimensionIndex(dimension: D2): Index {
    if (dimension > 1) {
      throw ErrInvalidDimension;
    }

    return this.dimensions[dimension];
  }
}
