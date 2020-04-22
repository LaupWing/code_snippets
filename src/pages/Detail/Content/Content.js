import React, {useState, useEffect} from 'react';
import {Editor, EditorState, convertFromRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';
import PrismDecorator from 'draft-js-prism';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import './Content.css';

function Content({content}){
    const [editorState, setEditorState] = useState(null);
    useEffect(()=>{
        const blocks = convertFromRaw(content);
        const decorator =new PrismDecorator({
            prism: Prism,
            defaultSyntax: "javascript"
        });

        setEditorState(EditorState.createWithContent(blocks, decorator));
    },[])
    
    return (
        editorState && <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            placeholder="Loading content..."
            readOnly
        />
        // <h3>Test</h3>
    );
}

const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};
  
function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote': return 'RichEditor-blockquote';
        default: return null;
    }
}

export default Content;