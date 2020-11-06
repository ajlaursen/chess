// K=king
// q=queen
// r=rook
// b=bishop
// k=knight
// p=pawn


let pieces = [
    pwa2 = {
        imgSource: "assets/imgs/blue_pawn.png",
        color: "white",
        x: 1,
        y: 2,
        type: "pawn",
    },
    pwb2 = {
        imgSource: "assets/imgs/blue_pawn.png",
        color: "white",
        x: 2,
        y: 2,
        type: "pawn",
    },
    pwc2 = {
        imgSource: "assets/imgs/blue_pawn.png",
        color: "white",
        x: 3,
        y: 2,
        type: "pawn",
    },
    pwd2 = {
        imgSource: "assets/imgs/blue_pawn.png",
        color: "white",
        x: 4,
        y: 2,
        type: "pawn",
    },
    pwe2 = {
        imgSource: "assets/imgs/blue_pawn.png",
        color: "white",
        x: 5,
        y: 2,
        type: "pawn",
    },
    pwf2 = {
        imgSource: "assets/imgs/blue_pawn.png",
        color: "white",
        x: 6,
        y: 2,
        type: "pawn",
    },
    pwg2 = {
        imgSource: "assets/imgs/blue_pawn.png",
        color: "white",
        x: 7,
        y: 2,
        type: "pawn",
    },
    pwh2 = {
        imgSource: "assets/imgs/blue_pawn.png",
        color: "white",
        x: 8,
        y: 2,
        type: "pawn",
    },
    kwe1 = {
        imgSource: "assets/imgs/blue_king.png",
        color: "white",
        x: 5,
        y: 1,
        type: "king",

    },
    qwd1 = {
        imgSource: "assets/imgs/blue_queen.png",
        color: "white",
        x: 4,
        y: 1,
        type: "queen",

    },
    bwc1 = {
        imgSource: "assets/imgs/blue_bishop.png",
        color: "white",
        x: 3,
        y: 1,
        type: "bishop",

    },
    bwf1 = {
        imgSource: "assets/imgs/blue_bishop.png",
        color: "white",
        x: 6,
        y: 1,
        type: "bishop",

    },
    kwb1 = {
        imgSource: "assets/imgs/blue_knight.png",
        color: "white",
        x: 2,
        y: 1,
        type: "kinght",

    },
    kwg1 = {
        imgSource: "assets/imgs/blue_knight.png",
        color: "white",
        x: 7,
        y: 1,
        type: "kinght",

    },
    rwa1 = {
        imgSource: "assets/imgs/blue_rook.png",
        color: "white",
        x: 1,
        y: 1,
        type: "rook",

    },
    rwh1 = {
        imgSource: "assets/imgs/blue_rook.png",
        color: "white",
        x: 8,
        y: 1,
        type: "rook",

    },
    pba2 = {
        imgSource: "assets/imgs/red_pawn.png",
        color: "black",
        x: 1,
        y: 7,
        type: "pawn",
    },
    pbb2 = {
        imgSource: "assets/imgs/red_pawn.png",
        color: "black",
        x: 2,
        y: 7,
        type: "pawn",
    },
    pbc2 = {
        imgSource: "assets/imgs/red_pawn.png",
        color: "black",
        x: 3,
        y: 7,
        type: "pawn",
    },
    pbd2 = {
        imgSource: "assets/imgs/red_pawn.png",
        color: "black",
        x: 4,
        y: 7,
        type: "pawn",
    },
    pbe2 = {
        imgSource: "assets/imgs/red_pawn.png",
        color: "black",
        x: 5,
        y: 7,
        type: "pawn",
    },
    pbf2 = {
        imgSource: "assets/imgs/red_pawn.png",
        color: "black",
        x: 6,
        y: 7,
        type: "pawn",
    },
    pbg2 = {
        imgSource: "assets/imgs/red_pawn.png",
        color: "black",
        x: 7,
        y: 7,
        type: "pawn",
    },
    pbh2 = {
        imgSource: "assets/imgs/red_pawn.png",
        color: "black",
        x: 8,
        y: 7,
        type: "pawn",
    },
    kbe1 = {
        imgSource: "assets/imgs/red_king.png",
        color: "black",
        x: 5,
        y: 8,
        type: "king",

    },
    qbd1 = {
        imgSource: "assets/imgs/red_queen.png",
        color: "black",
        x: 4,
        y: 8,
        type: "queen",

    },
    bbc1 = {
        imgSource: "assets/imgs/red_bishop.png",
        color: "black",
        x: 3,
        y: 8,
        type: "bishop",

    },
    bbf1 = {
        imgSource: "assets/imgs/red_bishop.png",
        color: "black",
        x: 6,
        y: 8,
        type: "bishop",

    },
    kbb1 = {
        imgSource: "assets/imgs/red_knight.png",
        color: "black",
        x: 2,
        y: 8,
        type: "kinght",

    },
    kbg1 = {
        imgSource: "assets/imgs/red_knight.png",
        color: "black",
        x: 7,
        y: 8,
        type: "kinght",

    },
    rba1 = {
        imgSource: "assets/imgs/red_rook.png",
        color: "black",
        x: 1,
        y: 8,
        type: "rook",

    },
    rbh1 = {
        imgSource: "assets/imgs/red_rook.png",
        color: "white",
        x: 8,
        y: 8,
        type: "rook",

    },
];



function populateBoard(array){
    array.forEach(element => {
       $('#x' + element.x +'y' + element.y).append("<img src=" + element.imgSource + " class=\"img-fluid piece\" color=\""+element.color+"\">")
    });
}
populateBoard(pieces)

let whiteChosen = false;
let whiteLocked = false;
let blackChosen = true;
let blackLocked = true;
let choosenPiece;
let pieceColor;
let oldSquare;

// need to make this a function that checkes if it is piece selection or piece placement
$(".space").click(function(event){
    
    
    console.log(" blacklock "  +blackLocked,"blackchosen "+ blackChosen)
    if(whiteLocked === false && whiteChosen === true){
        console.log("white peice square placement")
        let spaceX = $(this).attr("x")
        let spaceY = $(this).attr("y")
        $('#x' + spaceX +'y' + spaceY).append("<img src=" + choosenPiece + " class=\"img-fluid piece\" color=\""+pieceColor+ "\">")
        oldSquare.empty()
        whiteLocked = true;
        blackChosen = false;
        blackLocked = false;
        console.log(" whitelock "  +whiteLocked,"whitechosen "+ whiteChosen)
        console.log("blacks turn")
    }
    if(blackLocked === false && blackChosen === true){
        console.log("black piece square placemtn");
        let spaceX = $(this).attr("x")
        let spaceY = $(this).attr("y")
        $('#x' + spaceX +'y' + spaceY).append("<img src=" + choosenPiece + " class=\"img-fluid piece\">")
        oldSquare.empty()
        blackLocked = true;
        whiteChosen = false;
        whiteLocked = false;
        console.log(" blacklock "  +blackLocked,"blackchosen "+ blackChosen)
        console.log("whites turn")
    }
})

$(".piece").click(function(event){
    event.stopPropagation();
    console.log(whiteLocked, whiteChosen)
    if(whiteChosen === false && whiteLocked === false && $(this).attr("color") === "white"){
        console.log("white piece clicked")
        oldSquare = $(this).parent() 
        choosenPiece = $(this).attr("src");
        pieceColor = $(this).attr("color");
        console.log(oldSquare);
        whiteChosen = true;
        whiteLocked = false
    }
    if(blackChosen === false && blackLocked === false && $(this).attr("color") === "black"){
        console.log("black piece clicked")
        oldSquare = $(this).parent() 
        choosenPiece = $(this).attr("src");
        pieceColor = $(this).attr("color");
        console.log(oldSquare);
        blackChosen = true;
        blackLocked = false
    }
    
    
});

    // need to manipulate checkers for white and black piecse.





        // class Piece {
        //     constructor(color, type) {
        //         this.color = color;
        //         this.type = type;
        //     }
        // }

        // class Board {
        //     constructor() {
        //         this.board = new Array(8);
        //         for (var r = 0; r < this.board.length; r++) {
        //             this.board[r] = new Array(8);
        //         }
        //     }

        //     placeNewPiece(color, type, row, col) {
        //         this.board[row][col] = new Piece(color, type);
        //     }

        //     // Make a function to draw the board
        //     show() {
        //         var textRepresentation = "";
        //         for (var r = 0; r < this.board.length; r++) {
        //             for (var c = 0; c < this.board[0].length; c++) {
        //                 textRepresentation += "|";
        //                 if (this.board[r][c]) {
        //                     textRepresentation += this.board[r][c].color;
        //                     textRepresentation += this.board[r][c].type;
        //                 } else {
        //                     textRepresentation += "  ";
        //                 }
        //             }
        //             textRepresentation += "|\n------------------------\n";
        //         }
        //         console.log(textRepresentation);
        //     }

        //     startNewGame() {
        //         board.placeNewPiece("w", "r", 0, 0);
        //         board.placeNewPiece("w", "k", 0, 1);
        //         board.placeNewPiece("w", "b", 0, 2);
        //         board.placeNewPiece("w", "K", 0, 3);
        //         board.placeNewPiece("w", "q", 0, 4);
        //         board.placeNewPiece("w", "b", 0, 5);
        //         board.placeNewPiece("w", "k", 0, 6);
        //         board.placeNewPiece("w", "r", 0, 7);

        //         board.placeNewPiece("w", "p", 1, 0);
        //         board.placeNewPiece("w", "p", 1, 1);
        //         board.placeNewPiece("w", "p", 1, 2);
        //         board.placeNewPiece("w", "p", 1, 3);
        //         board.placeNewPiece("w", "p", 1, 4);
        //         board.placeNewPiece("w", "p", 1, 5);
        //         board.placeNewPiece("w", "p", 1, 6);
        //         board.placeNewPiece("w", "p", 1, 7);

        //         board.placeNewPiece("b", "r", 7, 0);
        //         board.placeNewPiece("b", "k", 7, 1);
        //         board.placeNewPiece("b", "b", 7, 2);
        //         board.placeNewPiece("b", "K", 7, 3);
        //         board.placeNewPiece("b", "q", 7, 4);
        //         board.placeNewPiece("b", "b", 7, 5);
        //         board.placeNewPiece("b", "k", 7, 6);
        //         board.placeNewPiece("b", "r", 7, 7);

        //         board.placeNewPiece("b", "p", 6, 0);
        //         board.placeNewPiece("b", "p", 6, 1);
        //         board.placeNewPiece("b", "p", 6, 2);
        //         board.placeNewPiece("b", "p", 6, 3);
        //         board.placeNewPiece("b", "p", 6, 4);
        //         board.placeNewPiece("b", "p", 6, 5);
        //         board.placeNewPiece("b", "p", 6, 6);
        //         board.placeNewPiece("b", "p", 6, 7);
        //     }

        //     legalMovesFromPosition(row, col) {
        //         // to be implemented by alex
        //     }

        //     move(startRow, startCol, endRow, endCol) {
        //         // to be implemented by alex
        //     }
        // }


        // board = new Board();
        // board.startNewGame();