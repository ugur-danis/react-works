import { useSelector } from "react-redux";
import { scoreSelector } from "../store/scoreSlice";

const Scoreboard = () => {
    const score = useSelector(scoreSelector);

    return (
        <div className='scoreboard'>
            SCORE: {score}
        </div>
    );
};

export default Scoreboard;