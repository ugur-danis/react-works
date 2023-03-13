import { useDispatch, useSelector } from "react-redux";
import { markdownSelector, setMarkdownText } from "../store/markdownSlice";

const MarkdownEditor = () => {
    const dispatch = useDispatch();
    const { markdownText } = useSelector(markdownSelector);

    return (
        <div className="page markdown">
            <textarea value={markdownText} onChange={e => dispatch(setMarkdownText(e.target.value))} />
        </div>
    );
};

export default MarkdownEditor;