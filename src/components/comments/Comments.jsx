import React from "react";
import classes from "./Comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={classes.write}>
          <textarea
            placeholder="write a comment..."
            className={classes.input}
          />
          <button className={classes.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">login to write a comment</Link>
      )}
      <div className={classes.commentslist}>
        <div className={classes.comment}>
          <div className={classes.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className={classes.image}
            />
            <div className={classes.userinfo}>
              <span className={classes.username}>Anuj Kaushik</span>
              <span className={classes.date}>31-02-2023</span>
            </div>
          </div>
          <div className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            accusantium obcaecati facere?
          </div>
        </div>
        <div className={classes.comment}>
          <div className={classes.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className={classes.image}
            />
            <div className={classes.userinfo}>
              <span className={classes.username}>Anuj Kaushik</span>
              <span className={classes.date}>31-02-2023</span>
            </div>
          </div>
          <div className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            accusantium obcaecati facere?
          </div>
        </div>
        <div className={classes.comment}>
          <div className={classes.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className={classes.image}
            />
            <div className={classes.userinfo}>
              <span className={classes.username}>Anuj Kaushik</span>
              <span className={classes.date}>31-02-2023</span>
            </div>
          </div>
          <div className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            accusantium obcaecati facere?
          </div>
        </div>
        <div className={classes.comment}>
          <div className={classes.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className={classes.image}
            />
            <div className={classes.userinfo}>
              <span className={classes.username}>Anuj Kaushik</span>
              <span className={classes.date}>31-02-2023</span>
            </div>
          </div>
          <div className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            accusantium obcaecati facere?
          </div>
        </div>
        <div className={classes.comment}>
          <div className={classes.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className={classes.image}
            />
            <div className={classes.userinfo}>
              <span className={classes.username}>Anuj Kaushik</span>
              <span className={classes.date}>31-02-2023</span>
            </div>
          </div>
          <div className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            accusantium obcaecati facere?
          </div>
        </div>
        <div className={classes.comment}>
          <div className={classes.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className={classes.image}
            />
            <div className={classes.userinfo}>
              <span className={classes.username}>Anuj Kaushik</span>
              <span className={classes.date}>31-02-2023</span>
            </div>
          </div>
          <div className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            accusantium obcaecati facere?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
