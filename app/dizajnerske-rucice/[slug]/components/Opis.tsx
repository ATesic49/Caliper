"use client";
import React from "react";
import styles from "../../../../public/css/dizajnerske-rucice/[slug]/page.module.css";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

export default function Opis({ opis }: { opis: string }) {
  const loadFromDatabase = () => {
    try {
      const contentStateJSON = opis; // Replace this with your data retrieval logic.

      const contentState = convertFromRaw(JSON.parse(contentStateJSON));
      const newEditorState = EditorState.createWithContent(contentState);
      const contentAsHtml = draftToHtml(
        convertToRaw(newEditorState.getCurrentContent())
      );
      return contentAsHtml;
    } catch (e) {
      console.log("errorj:", e);
      return "<p>DOslo je do greske</p>";
    }
    // Retrieve the content state JSON from your database.
    // For this example, we will simulate loading it.
  };
  return (
    <div className={styles.text}>
      <div dangerouslySetInnerHTML={{ __html: loadFromDatabase() }} />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quis
      aliquam optio minus reprehenderit fugit autem libero numquam provident
      nostrum?
    </div>
  );
}
