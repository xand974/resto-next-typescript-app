import style from "../styles/button.module.css";

type ButtonType = {
  text: string;
  isRed: boolean;
};

export default function Button({ text, isRed }: ButtonType) {
  return (
    <div
      className={style.btn}
      style={{ background: isRed ? "#d21b27" : "#f1f1f1" }}
    >
      <span
        className={style.btnText}
        style={{ color: isRed ? "#f1f1f1" : "#161616" }}
      >
        {text}
      </span>
    </div>
  );
}
