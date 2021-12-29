import style from "../styles/footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <h1 className={style.footerTitle}>GF1 No Copyright - Alexandre Malet</h1>
      <div className={style.footerLinks}>
        <p>Nos réseaux sociaux</p>
        <Link href="https://www.facebook.com/">
          <span>Facebook</span>
        </Link>
        <Link href="https://www.instagram.com/xand974">
          <span>Instagram</span>
        </Link>
        <Link href="https://www.github.com/xand974">
          <span>GitHub</span>
        </Link>
      </div>
      <div className={style.footerForm}>
        <h2 className={style.footerFormTitle}>
          Restez à l'affût de nos dernières offres
        </h2>
        <form
          className={style.footerFormForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" name="email" placeholder="john@gmail.com" />
          <button>Envoyer</button>
        </form>
      </div>
    </footer>
  );
}
