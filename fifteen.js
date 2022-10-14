/*fifteen.js
Javascript file for assignment 5 in CPS 353
Authors: Adam Princiotta, John Zhu
*/

//globally declared variables
var puzzlePiece;
var Y; //Y cordinate of empey square
var X; //X cordinate of empey square


window.onload = function () {
    "use strict";
    X = '300px'; //bottom right empty space
    Y = '300px'; //bottom right empty space
    var puzzleArea = document.getElementById('puzzlearea');
    puzzlePiece = puzzleArea.getElementsByTagName('div'); //retrieve element within puzzlearea

    for (var i = 0; i < 15; i++) //applies features to each puzzle piece, sets functions for hovering, stopped hovering and clicking
    {
        puzzlePiece[i].className = 'puzzlepiece'; //setting up the puzzle piece code
        puzzlePiece[i].style.left = (i % 4 * 100) + 'px'; //calculates the position for puzzle pieces from left to right
        puzzlePiece[i].style.top = (parseInt(i / 4) * 100) + 'px'; //calculates the position for puzzle pieces from top to bottom
        puzzlePiece[i].style.backgroundPosition = '-' + puzzlePiece[i].style.left + ' ' + '-' + puzzlePiece[i].style.top;
        //calculates the position of the background picture so in moves in relation to the puzzle pieces, sets the values negative,
        //because that's how background-position works
       
        puzzlePiece[i].onmouseover = function () //applies features when mouse moves over a puzzle pieces, onmouseover found on w3schools
        {
            if (canMove(parseInt(this.innerHTML))) //checks the piece the mouse is hovering over if it is next to an empty space so it can move
            {
                this.style.border = "5px solid red"; //changes border color to red when a puzzle piece is next to an empty space
                this.style.color = "red"; //changes font color to read
                this.style.backgroundImage = "url(background.jpg)";
                //sets the image for the puzzle's background
            }
        }
        puzzlePiece[i].onmouseout = function () //resets features when the mouse moves out of puzzle piece, onmouseout found on w3schools
        {
            this.style.border = "5px solid black"; //resets the puzzle piece border to black
            this.style.color = "black"; //resets the text color to black
            this.style.backgroundImage = "url(background.jpg)";
            //sets the image for the puzzle's background
        }
        puzzlePiece[i].onclick = function () //activates when mouse clicks a puzzle piece
        {
            if (canMove(parseInt(this.innerHTML))) //checks if the puzzle piece is next to an adjacent spot so it can move
            {
                movePiece(this.innerHTML-1); //moves into the empty space if true, new empty space created
                return;
            }
        }
    }

}

//returns true if the given a piece can be moved into an empty space, checks for a position adjacent to be the empty space
function canMove(pos)
{
    "use strict";
    if (left(X, Y) == (pos-1)) {
        return true;
    }
    else if (right(X, Y) == (pos-1)) {
        return true;
    }
    else if (up(X, Y) == (pos-1)) {
        return true;
    }
    else if (down(X, Y) == (pos-1)) {
        return true;
    }


}

//moves the puzzle piece by switching position with an empty space
function movePiece(pos)
{
    "use strict";
    temp = puzzlePiece[pos].style.left; //stores left position
    puzzlePiece[pos].style.left = X; //sets new left position as X
    X = temp; //sets X as stored X position, new empty spot X value
    var temp = puzzlePiece[pos].style.top; //stores top position
    puzzlePiece[pos].style.top = Y; //sets new top position as Y
    Y = temp; //sets Y is the orignal stored top position, new empty spot Y value
}