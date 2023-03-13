import { useDispatch, useSelector } from "react-redux";
import { markdownSelector, setMarkdownText } from "../store/markdownSlice";

const Header = () => {
    const dispatch = useDispatch();
    const { exampleMarkdown } = useSelector(markdownSelector);

    const showExampleMarkdown = () => {
        dispatch(setMarkdownText(exampleMarkdown));
    };

    return (
        <div className="header">
            <h1>Markdown Previewer</h1>
            <button className='showExample' onClick={showExampleMarkdown}>?</button>
        </div>
    );
};

export default Header;