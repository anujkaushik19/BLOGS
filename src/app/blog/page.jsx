import React from "react";
import classes from "./blogPage.module.css";
import CardList from "@/components/cardlist/CardList";
import Menu from "@/components/menu/Menu";

function BlogPage() {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Blog Page</h1>
      <div className={classes.contentcontainer}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}

export default BlogPage;
