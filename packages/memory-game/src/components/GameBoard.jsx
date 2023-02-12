import cards from "../constants/cards";
import Card from "./Card";

const GameBoard = () => {

    return (
        <div id="gameBoard">
            {
                cards.map((card, i) => <Card data={card} key={i} />)
            }
        </div>
    );
};

export default GameBoard;