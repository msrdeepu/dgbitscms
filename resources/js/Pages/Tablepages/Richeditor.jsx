import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";

const Richeditor = (props) => {
    const editor = useRef(null);
    const [content, setContent] = useState("");
    return (
        <div style={{ margin: "5px", maxWidth: "50%" }}>
            <p>{props.text}</p>
            <JoditEditor
                ref={editor}
                value={content}
                onChange={(newContent) => setContent(newContent)}
            />
        </div>
    );
};

export default Richeditor;
