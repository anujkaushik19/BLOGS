import classes from "./Menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuposts/MenuPosts";
import MenuCategory from "../menucategory/MenuCategory";
function Menu() {
  return (
    <div className={classes.container}>
      <h2 className={classes.subtitle}>What's new</h2>
      <h1 className={classes.title}>Most Polular</h1>
      <MenuPosts withImage={false} />
      <h2 className={classes.subtitle}>Discover by topic</h2>
      <h1 className={classes.title}>Categories</h1>
      <MenuCategory />
      <h2 className={classes.subtitle}>Chosen by the editor</h2>
      <h1 className={classes.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
}

export default Menu;
