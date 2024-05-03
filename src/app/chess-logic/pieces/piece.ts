export abstract class Piece {
    protected abstract _FENChar: FENChar;
    protected abstract _direction: Coords[];

    constructor (private _color: Color) {}

    public get FENChar(): FENChar {
        return this._FENChar;
    }

    public get _direction(): Coords[] {
        return this._direction;
    }

    public get color() : Color {
        return this._color;
    }
}