import classes from "./Pagination.module.css";
function Pagination() {
  return (
    <div className={classes.container}>
      <button className={classes.button}>Previous</button>
      <button className={classes.button}>Next</button>
    </div>
  );
}

export default Pagination;
