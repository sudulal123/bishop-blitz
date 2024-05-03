export enum Color {
    White,
    Black
}

export type Coords = {
    x: number,
    y: number
}

export enum FENChar {
    WhiteKing = "K",
    WhiteQueen = "Q",
    WhiteBishop = "B",
    WhiteRook = "R",
    WhiteKnight= "N",
    WhitePawn = "P",
    
    BlackKing = "k",
    BlackQueen = "q",
    BlackBishop = "b",
    BlackRook = "r",
    BlackKnight= "n",
    BlackPawn = "p",
}