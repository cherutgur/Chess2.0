import React from 'react'
import piecesArr from '../piecesArr';

function Board() {

  const creatBoard = () =>{

    let color = "black";
    let board = []
    let letters = ['a','b','c','d','e','f','g','h']
    for (let i = 8; i > -1; i--) {
      if (i % 2) {
        color = "white";
      } else {
        color = "black";
      }
      for (let j = 0; j < 9; j++) {
        // `${i},${j}`
        
        let newBox = {id:{i,j}, className:`box ${color} `}
        if(i===0){
          newBox= {id:{i,j}, className:`box number`, number:letters[j-1]}
        }else if(j===0){
          newBox= {id:{i,j}, className:`box number`, number:i}
        }

        board = [...board, newBox]

        if (color === "black") {
          color = "white";
        } else {
          color = "black";
        }
      }
    }
    console.log({board});
    return board;
  }
  
  return (
    <div className='board'>
      {
        creatBoard().map(checker => (
          <div id={checker.id} className={checker.className}>
            {checker.number}
          <div>
            {
             piecesArr.find(piece=> piece.position.i === checker.id.i && piece.position.j === checker.id.j)?.icon
            }
          </div>
          </div>
        ))
      }
    </div>
  )
}

export default Board


