import style from "../styles/log.module.css";
import Link from "next/link";
export default function Register() {
  return (
    <div className={style.logContainer}>
      <div className={style.logWrapper}>
        <h1 className={style.logTitle}>Bonjour ! Enregistrez-vous</h1>
        <form onSubmit={(e) => e.preventDefault()} className={style.logForm}>
          <div className={style.logInputContainer}>
            <label htmlFor="username">Pseudo</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="example111"
            />
          </div>
          <div className={style.logInputContainer}>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password123."
            />
          </div>
          <button>S'enregistrer</button>
        </form>
        <div className={style.logLinkContainer}>
          <span className={style.logLink}>Vous avez déjà un compte ? </span>
          <Link href="/login">
            <span>Se connecter</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
