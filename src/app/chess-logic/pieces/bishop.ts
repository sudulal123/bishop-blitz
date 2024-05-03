import { Piece } from "./pieceProp";
import { FENChar, Coords, Color } from "../models";

export class Bishop extends Piece {
    protected override _FENChar: FENChar;
    protected override _direction: Coords[] = [
      {x: 1, y: 1},  
      {x: 1, y: -1},  
      {x: -1, y: 1},  
      {x: -1, y: -1},  
    ];

    constructor (private pieceColor: Color) {
        super (pieceColor);
        this._FENChar = pieceColor === Color.White ? FENChar.WhiteBishop : FENChar.BlackBishop;
    }
}