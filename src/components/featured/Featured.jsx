import classes from "./Featured.module.css";
import Image from "next/image";
function Featured() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        <b className={classes.bold}>hey,Anuj Kaushik here!</b>Discover my stories and creative
        ideas.
      </h1>
      <div className={classes.post}>
        <div className={classes.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={classes.image} />
        </div>
        <div className={classes.textContainer}>
          <h1 className={classes.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos, a!
          </h1>
          <p className={classes.postDesc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
            laudantium nam rem tempore labore obcaecati enim repellat neque
            dolorem placeat?
          </p>
          <button className={classes.button}>Read More</button>
        </div>
        
      </div>
    </div>
  );
}

export default Featured;
