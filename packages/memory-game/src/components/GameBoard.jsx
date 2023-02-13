import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardsSelector, flipCard, flipCards, matchCards, mixCards, resetCards } from "../store/cardsSlice";
import { decreaseScore, increaseScore, resetScore } from "../store/scoreSlice";
import Card from "./Card";

let flippedCards = [];

const GameBoard = () => {
    const dispatch = useDispatch();
    const cards = useSelector(cardsSelector.selectAll);
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        setIsGameOver(cards.every(x => x.matched));
    }, [cards]);

    const handleClickCard = (e, data) => {
        if (data.flipped || data.matched) return;
        if (flippedCards.length === 2) return;

        dispatch(flipCard({ id: data.id, flipped: !data.flipped }));
        flippedCards.push(data);

        if (flippedCards.length === 2) {
            checkCardsMatched();
        }
    };

    const isCardsMatched = () => flippedCards.every(c => c.img === flippedCards[0].img);

    const checkCardsMatched = () => {
        if (isCardsMatched()) {
            dispatch(matchCards(flippedCards.map(c => c.id)));
            dispatch(increaseScore());
            flippedCards = [];
        }
        else {
            setTimeout(() => {
                dispatch(flipCards(flippedCards.map(c => ({ id: c.id, flipped: false }))));

                flippedCards = [];
                dispatch(decreaseScore());
            }, 700);
        }
    };

    const restartGame = e => {
        dispatch(resetCards(cards.map(c => c.id)));
        dispatch(resetScore());
        setTimeout(() => {
            dispatch(mixCards());
            setIsGameOver(false);
        }, 700);
    };

    return (
        <div id="gameBoard">
            <div className={`gameOverContainer ${isGameOver ? 'show' : ''}`}>
                <h1>Game Over</h1>
                <button onClick={restartGame}>RESTART</button>
            </div>
            {
                cards.map((card, i) => <Card key={i} data={card} handleClickCard={handleClickCard} />)
            }
        </div>
    );
};

export default GameBoard;