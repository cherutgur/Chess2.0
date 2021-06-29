import React, {useState} from 'react'
import piecesArr from '../piecesArr';

//components
import Piece from './Piece';

function Board() {

  const [piecesArray, setPiecesArray] = useState(piecesArr)
  const [currentPiece, setCurrentPiece] = useState()

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


  const click=()=>{
    setPiecesArray([...piecesArray, {
      color: "white",
      position: {
        i: 4,
        j: 4
      },
      name: 'whiteKing',
      icon: '♔',
      type:'king'
    }])
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }
  

  
  function drop(ev) {
    ev.preventDefault();
    const newIPosition = parseInt(ev.currentTarget.id.split(',')[0])
    const newJPosition = parseInt(ev.currentTarget.id.split(',')[1])
    console.log(ev.currentTarget);
    console.log(ev);

    let temp = [...piecesArray]

    temp.find(piece=>piece.name === currentPiece).position = {
      i: newIPosition,
      j: newJPosition
    }

    console.log(temp);
    setPiecesArray(temp)

    // var data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));
  }
  
  return (
    <div className='board'>
      
      {
        creatBoard().map(checker => (
          <div 
          key={`${checker.id.i},${checker.id.j}`} 
          id={`${checker.id.i},${checker.id.j}`} 
          className={checker.className} 
          onDrop={(e)=>drop(e)} 
          onDragOver={(e)=>allowDrop(e)}
          >
          {checker.number?checker.number: <Piece setCurrentPiece={setCurrentPiece} piecesArray={piecesArray} position={{i:checker.id.i,j:checker.id.j}}/>
          }
          {/* <div 
          draggable={true} 
          className='piece'
          onDragStart={(e)=>drag(e)}
          >
            {
             piecesArray.find(piece=> piece.position.i === checker.id.i && piece.position.j === checker.id.j)?.icon
            }
          </div> */}
         
          </div>
        ))
      }  <button onClick={click}>click</button>
    </div>
  )
}

export default Board


