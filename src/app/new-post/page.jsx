"use client";
import React, { useState } from "react";
import classes from "./NewPostPage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const NewPostPage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={classes.container}>
      <input type="text" placeholder="Title" className={classes.input} />
      <div className={classes.editor}>
        <button
          className={classes.button}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={classes.add}>
            <button className={classes.addButton}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className={classes.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={classes.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
          className={classes.textArea}
        />
      </div>
      <button className={classes.publish}>Publish</button>
    </div>
  );
};

export default NewPostPage;
