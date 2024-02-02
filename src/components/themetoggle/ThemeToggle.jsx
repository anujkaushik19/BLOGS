"use client";
import React, { useContext } from "react";
import classes from "./ThemeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

function ThemeToggle() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div
      className={classes.container}
      onClick={toggleTheme}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="" height={14} width={14} />
      <div
        className={classes.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 1, backgroundColor: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" height={14} width={14} />
    </div>
  );
}

export default ThemeToggle;
