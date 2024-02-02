import Navbar from "@/components/navbar/Navbar";
import classes from "./homepage.module.css";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categorylist/CategoryList";
import CardList from "@/components/cardlist/CardList";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={classes.container}>
      <Featured />
      <CategoryList />
      <div className={classes.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
