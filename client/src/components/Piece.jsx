import React from 'react'

function Piece({position,piecesArray,setCurrentPiece}) {

 const {i,j} = position

 function drag(ev) {
  // ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev.target.id);
  setCurrentPiece(ev.target.id)
}

const piece = piecesArray.find(piece=> piece.position.i === i && piece.position.j ===j)

  return (
    piece?
    <>
          <div 
          draggable={true} 
          className='piece'
          onDragStart={(e)=>drag(e)}
          id={piece.name}
          allo
          >
            {
             piece.icon
            }
          </div>
    </>
    : null
  )
}

export default Piece
