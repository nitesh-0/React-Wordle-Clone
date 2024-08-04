import Letters from "./Letters";

function Board() {
  
  return (
     <div className="board">
        <div className="row">
            <Letters letterPos={0} attemtVal={0}/>
            <Letters letterPos={1} attemtVal={0}/>
            <Letters letterPos={2} attemtVal={0}/>
            <Letters letterPos={3} attemtVal={0}/>
            <Letters letterPos={4} attemtVal={0}/>
            </div>
        <div className="row">
            <Letters letterPos={0} attemtVal={1}/>
            <Letters letterPos={1} attemtVal={1}/>
            <Letters letterPos={2} attemtVal={1}/>
            <Letters letterPos={3} attemtVal={1}/>
            <Letters letterPos={4} attemtVal={1}/>
            </div>
        <div className="row">
            <Letters letterPos={0} attemtVal={2}/>
            <Letters letterPos={1} attemtVal={2}/>
            <Letters letterPos={2} attemtVal={2}/>
            <Letters letterPos={3} attemtVal={2}/>
            <Letters letterPos={4} attemtVal={2}/>
            </div>
        <div className="row">
            <Letters letterPos={0} attemtVal={3}/>
            <Letters letterPos={1} attemtVal={3}/>
            <Letters letterPos={2} attemtVal={3}/>
            <Letters letterPos={3} attemtVal={3}/>
            <Letters letterPos={4} attemtVal={3}/>
            </div>
        <div className="row">
            <Letters letterPos={0} attemtVal={4}/>
            <Letters letterPos={1} attemtVal={4}/>
            <Letters letterPos={2} attemtVal={4}/>
            <Letters letterPos={3} attemtVal={4}/>
            <Letters letterPos={4} attemtVal={4}/>
            </div>
        <div className="row">
            <Letters letterPos={0} attemtVal={5}/>
            <Letters letterPos={1} attemtVal={5}/>
            <Letters letterPos={2} attemtVal={5}/>
            <Letters letterPos={3} attemtVal={5}/>
            <Letters letterPos={4} attemtVal={5}/>
            </div>
     </div>
  );
}

export default Board;