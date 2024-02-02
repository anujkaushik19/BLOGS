"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

function ThemeProvider(props) {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
    return <div className={theme}>{props.children}</div>;
  }
}

export default ThemeProvider;
