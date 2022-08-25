export type Dim1 = 1;
export type Dim2 = 2;

export type D2 = Dim1 | Dim2;
export type Dimension = Dim1 | Dim2;

export type Index = number;
export type DefaultContents = Stone | undefined;

export interface Position<Dimension> {
  asString(): string;
  getDimensionIndex(dimension: Dimension): Index;
}

export interface Grid<Dimension> {
  getAtPosition(pos: Position<Dimension>): Slot;
}
