import { useContext } from "react";
import { AppContext } from "../App";

function GameOver(){
    const {gameOver, currAttempt, correctWord} = useContext(AppContext)
    return (
        <div className="gameOver">
            <h3>{gameOver.correctGuess ? "You guessed correctly" : "Wrong guess"}</h3>
            <h1>correct: {correctWord}</h1>
            {gameOver.guessedWord &&  (<h1>You guessed in {currAttempt.attempt} attempt</h1>)
           }
            

        </div>
    )
}
export default GameOver;