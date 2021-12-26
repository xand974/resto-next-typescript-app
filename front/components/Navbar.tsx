import style from "../styles/navbar.module.css";
import Link from "next/link";
import { LocalMallOutlined } from "@mui/icons-material";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <h1 className={style.navTitle}>GF1</h1>
      <ul className={style.navLinks}>
        <Link href="/">
          <li className={style.navLinkItem}>Home</li>
        </Link>
        <Link href="/menu">
          <li className={style.navLinkItem}>Menu</li>
        </Link>
        <Link href="/about">
          <li className={style.navLinkItem}>About Us</li>
        </Link>
        <Link href="/contact">
          <li className={style.navLinkItem}>Contact</li>
        </Link>
      </ul>
      <div className={style.navButtons}>
        <Link href="/cart">
          <span>
            <LocalMallOutlined className={style.navCartIcon} />
          </span>
        </Link>
        <Link href="/register">
          <Button text="Register" isRed={true} />
        </Link>
      </div>
    </nav>
  );
}
