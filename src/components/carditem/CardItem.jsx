import React from "react";
import classes from "./CardItem.module.css";
import Link from "next/link";
import Image from "next/image";

function CardItem() {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={classes.image} />
      </div>
      <div className={classes.textContainer}>
        <div className={classes.detail}>
          <span className={classes.date}>11.02.2024 - </span>
          <span className={classes.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1 className={classes.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </Link>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          ducimus eveniet voluptas veniam laudantium, adipisci explicabo.
          Corporis mollitia vitae asperiores ad, qui assumenda!
        </p>
        <Link href="/" className={classes.link}>Read More</Link>
      </div>
    </div>
  );
}

export default CardItem;
