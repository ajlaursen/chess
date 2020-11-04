// K=king
// q=queen
// r=rook
// b=bishop
// k=knight
// p=pawn


let pieces = [
    pwa1 = {
        imgSource: "assets/imgs/white-pawn.png",
        color: "white",
        x: 1,
        y: 2,
        type: "pawn",
    },
    pwa2 = {
        imgSource: "assets/imgs/white-pawn.png",
        color: "white",
        x: 2,
        y: 2,
        type: "pawn",
    },
    pwa3 = {
        imgSource: "assets/imgs/white-pawn.png",
        color: "white",
        x: 3,
        y: 2,
        type: "pawn",
    },
    pwa4 = {
        imgSource: "assets/imgs/white-pawn.png",
        color: "white",
        x: 4,
        y: 2,
        type: "pawn",
    },
    pwa5 = {
        imgSource: "assets/imgs/white-pawn.png",
        color: "white",
        x: 5,
        y: 2,
        type: "pawn",
    },
    pwa6 = {
        imgSource: "assets/imgs/white-pawn.png",
        color: "white",
        x: 6,
        y: 2,
        type: "pawn",
    },
    pwa7 = {
        imgSource: "assets/imgs/white-pawn.png",
        color: "white",
        x: 7,
        y: 2,
        type: "pawn",
    },
    pwa8 = {
        imgSource: "assets/imgs/white-pawn.png",
        color: "white",
        x: 8,
        y: 2,
        type: "pawn",
    },
    pba1 = {
        imgSource: "assets/imgs/black-pawn.png",
        color: "black",
        x: 1,
        y: 7,
        type: "pawn",
    },
    pba2 = {
        imgSource: "assets/imgs/black-pawn.png",
        color: "black",
        x: 2,
        y: 7,
        type: "pawn",
    },
    pba3 = {
        imgSource: "assets/imgs/black-pawn.png",
        color: "black",
        x: 3,
        y: 7,
        type: "pawn",
    },
    pba4 = {
        imgSource: "assets/imgs/black-pawn.png",
        color: "black",
        x: 4,
        y: 7,
        type: "pawn",
    },
    pba5 = {
        imgSource: "assets/imgs/black-pawn.png",
        color: "black",
        x: 5,
        y: 7,
        type: "pawn",
    },
    pba6 = {
        imgSource: "assets/imgs/black-pawn.png",
        color: "black",
        x: 6,
        y: 7,
        type: "pawn",
    },
    pba7 = {
        imgSource: "assets/imgs/black-pawn.png",
        color: "black",
        x: 7,
        y: 7,
        type: "pawn",
    },
    pba8 = {
        imgSource: "assets/imgs/black-pawn.png",
        color: "black",
        x: 8,
        y: 7,
        type: "pawn",
    }
];



function populateBoard(array){
    array.forEach(element => {
       $('#x' + element.x +'y' + element.y).append("<img src=" + element.imgSource + " class=\"img-fluid\">")
    });
}
populateBoard(pieces)
        class Piece {
            constructor(color, type) {
                this.color = color;
                this.type = type;
            }
        }

        class Board {
            constructor() {
                this.board = new Array(8);
                for (var r = 0; r < this.board.length; r++) {
                    this.board[r] = new Array(8);
                }
            }

            placeNewPiece(color, type, row, col) {
                this.board[row][col] = new Piece(color, type);
            }

            // Make a function to draw the board
            show() {
                var textRepresentation = "";
                for (var r = 0; r < this.board.length; r++) {
                    for (var c = 0; c < this.board[0].length; c++) {
                        textRepresentation += "|";
                        if (this.board[r][c]) {
                            textRepresentation += this.board[r][c].color;
                            textRepresentation += this.board[r][c].type;
                        } else {
                            textRepresentation += "  ";
                        }
                    }
                    textRepresentation += "|\n------------------------\n";
                }
                console.log(textRepresentation);
            }

            startNewGame() {
                board.placeNewPiece("w", "r", 0, 0);
                board.placeNewPiece("w", "k", 0, 1);
                board.placeNewPiece("w", "b", 0, 2);
                board.placeNewPiece("w", "K", 0, 3);
                board.placeNewPiece("w", "q", 0, 4);
                board.placeNewPiece("w", "b", 0, 5);
                board.placeNewPiece("w", "k", 0, 6);
                board.placeNewPiece("w", "r", 0, 7);

                board.placeNewPiece("w", "p", 1, 0);
                board.placeNewPiece("w", "p", 1, 1);
                board.placeNewPiece("w", "p", 1, 2);
                board.placeNewPiece("w", "p", 1, 3);
                board.placeNewPiece("w", "p", 1, 4);
                board.placeNewPiece("w", "p", 1, 5);
                board.placeNewPiece("w", "p", 1, 6);
                board.placeNewPiece("w", "p", 1, 7);

                board.placeNewPiece("b", "r", 7, 0);
                board.placeNewPiece("b", "k", 7, 1);
                board.placeNewPiece("b", "b", 7, 2);
                board.placeNewPiece("b", "K", 7, 3);
                board.placeNewPiece("b", "q", 7, 4);
                board.placeNewPiece("b", "b", 7, 5);
                board.placeNewPiece("b", "k", 7, 6);
                board.placeNewPiece("b", "r", 7, 7);

                board.placeNewPiece("b", "p", 6, 0);
                board.placeNewPiece("b", "p", 6, 1);
                board.placeNewPiece("b", "p", 6, 2);
                board.placeNewPiece("b", "p", 6, 3);
                board.placeNewPiece("b", "p", 6, 4);
                board.placeNewPiece("b", "p", 6, 5);
                board.placeNewPiece("b", "p", 6, 6);
                board.placeNewPiece("b", "p", 6, 7);
            }

            legalMovesFromPosition(row, col) {
                // to be implemented by alex
            }

            move(startRow, startCol, endRow, endCol) {
                // to be implemented by alex
            }
        }


        board = new Board();
        board.startNewGame();

