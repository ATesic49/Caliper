// components/RichTextEditor.tsx
"use client";

import React, { useState } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

function RichTextEditor({
  editorState,
  setEditorState,
}: {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}) {
  const onEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };

  const loadFromDatabase = () => {
    // Retrieve the content state JSON from your database.
    // For this example, we will simulate loading it.
    const contentStateJSON = "{}"; // Replace this with your data retrieval logic.

    const contentState = convertFromRaw(JSON.parse(contentStateJSON));
    const newEditorState = EditorState.createWithContent(contentState);
    setEditorState(newEditorState);
  };

  const contentAsHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );

  return (
    <Editor
      editorState={editorState}
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      onEditorStateChange={onEditorStateChange}
    />
  );
}

export default RichTextEditor;
