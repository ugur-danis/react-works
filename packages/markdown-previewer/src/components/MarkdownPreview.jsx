import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { markdownSelector } from "../store/markdownSlice";
import { marked } from "marked";

const MarkdownPreview = () => {
    const ref = useRef(null);
    const { markdownText } = useSelector(markdownSelector);

    useEffect(() => {
        ref.current.innerHTML = marked.parse(markdownText, { sanitize: true });
    }, [markdownText]);

    return (
        <div ref={ref} className="page preview" />
    );
};

export default MarkdownPreview;