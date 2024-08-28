import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import "highlight.js/styles/a11y-dark.css";
import "css/markdown.css";

const MarkdownRenderer = ({ path }) => {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        const uri = `${process.env.PUBLIC_URL}/docs/${path}`;
        fetch(uri)
            .then((response) => response.text())
            .then((text) => setMarkdown(text));
        console.log(markdown)
    }, [path]);


    return (
        <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
            <div style={{ maxWidth: "768px", width: "100%" }}>
                <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeSlug]}>
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default MarkdownRenderer;