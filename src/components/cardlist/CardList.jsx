import CardItem from "../carditem/CardItem";
import Pagination from "../pagination/Pagination";
import classes from "./CardList.module.css";
function CardList() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Recent Posts</h1>
      <div className={classes.posts}>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
      </div>
      <Pagination />
    </div>
  );
}

export default CardList;
