import React from 'react';
import 'react-dom';
import {Editor, EditorState} from 'draft-js';

export default ()=> {
    const [editorState, setEditorState] = React.useState(
        EditorState.createEmpty(),
    );
    return <Editor editorState={editorState} onChange={setEditorState} />;
}
