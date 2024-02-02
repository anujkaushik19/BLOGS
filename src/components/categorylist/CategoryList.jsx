import Link from "next/link";
import classes from "./CategoryList.module.css";
import Image from "next/image";
function CategoryList() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Popular Categories</h1>
      <div className={classes.categoriesContainer}>
        <Link
          href="/blog?cat=style"
          className={`${classes.category} ${classes.style}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={classes.image}
          />
          style
        </Link>
        <Link
          href="/blog?cat=travel"
          className={`${classes.category} ${classes.travel}`}
        >
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className={classes.image}
          />
          travel
        </Link>
        <Link
          href="/blog"
          className={`${classes.category} ${classes.fashion}`}
        >
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className={classes.image}
          />
          fashion
        </Link>
        <Link
          href="/blog?cat=food"
          className={`${classes.category} ${classes.food}`}
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={classes.image}
          />
          food
        </Link>
        <Link
          href="/blog?cat=food"
          className={`${classes.category} ${classes.culture}`}
        >
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className={classes.image}
          />
          culture
        </Link>
        <Link
          href="/blog?cat=food"
          className={`${classes.category} ${classes.coding}`}
        >
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className={classes.image}
          />
          coding
        </Link>
      </div>
    </div>
  );
}

export default CategoryList;
