import style from "../styles/log.module.css";
import Link from "next/link";
export default function Login() {
  return (
    <div className={style.logContainer}>
      <div className={style.logWrapper}>
        <h1 className={style.logTitle}>Bonjour ! Connectez-vous</h1>
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
          <button>Se connecter</button>
        </form>
        <div className={style.logLinkContainer}>
          <span className={style.logLink}>
            Vous n'avez pas encore de compte ?{" "}
          </span>
          <Link href="/register">
            <span>S'enregistrer</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
