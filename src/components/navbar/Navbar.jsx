import Link from "next/link";
import classes from "./Navbar.module.css";
import Image from "next/image";
import ThemeToggle from "../themetoggle/ThemeToggle";
import AuthLinks from "../authlinks/AuthLinks";
function Navbar() {
  return (
    <div className={classes.container}>
      <div className={classes.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="github" width={24} height={24} />
      </div>
      <div className={classes.logo}>BLOG STORE</div>
      <div className={classes.links}>
        <ThemeToggle />
        <Link href="/" className={classes.link}>Home</Link>
        <Link href="/" className={classes.link}>Contact</Link>
        <Link href="/" className={classes.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
}

export default Navbar;
