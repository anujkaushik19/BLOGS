import React from "react";
import classes from "./MenuCategory.module.css";
import Link from "next/link";

function MenuCategory() {
  return (
    <div className={classes.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${classes.categoryItem} ${classes.travel}`}
      >
        Travel
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${classes.categoryItem} ${classes.culture}`}
      >
        Culture
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${classes.categoryItem} ${classes.style}`}
      >
        Style
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${classes.categoryItem} ${classes.coding}`}
      >
        Coding
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${classes.categoryItem} ${classes.fashion}`}
      >
        Fashion
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${classes.categoryItem} ${classes.food}`}
      >
        Food
      </Link>
    </div>
  );
}

export default MenuCategory;
