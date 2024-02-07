import React from "react";
import classes from "./PostItem.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
function PostItem() {
  return (
    <div className={classes.container}>
      <div className={classes.infocontainer}>
        <div className={classes.textcontainer}>
          <h1 className={classes.heading}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            assumenda placeat autem.
          </h1>
          <div className={classes.userinfocontainer}>
            <div className={classes.userimagecontainer}>
              <Image src="/p1.jpeg" fill className={classes.avatar} />
            </div>
            <div className={classes.usertextcontainer}>
              <span className={classes.username}>Anuj Kaushik</span>
              <span className={classes.date}>31-02-2023</span>
            </div>
          </div>
        </div>
        <div className={classes.imagecontainer}>
          <Image src="/p1.jpeg" fill className={classes.image} />
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.postcontainer}>
          <div className={classes.postdescription}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              laudantium vel soluta aspernatur, animi, consectetur eius saepe at
              odit quos dolorem vitae reiciendis! Distinctio, ratione?
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              laudantium vel soluta aspernatur, animi, consectetur eius saepe at
              odit quos dolorem vitae reiciendis! Distinctio, ratione?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              laudantium vel soluta aspernatur, animi, consectetur eius saepe at
              odit quos dolorem vitae reiciendis! Distinctio, ratione?
            </p>
          </div>
          <div className={classes.commentcontainer}>
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default PostItem;
