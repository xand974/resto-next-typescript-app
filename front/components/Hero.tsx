import Link from "next/link";
import Image from "next/image";
import style from "../styles/hero.module.css";
import Button from "./Button";
import { Star } from "@mui/icons-material";
import { reviews } from "../helpers/data";
import { WorkspacePremiumOutlined } from "@mui/icons-material";
export default function Hero() {
  return (
    <div className={style.heroContainer}>
      <div className={style.heroLeftContainer}>
        <h1 className={style.heroTitle}>
          it's not just <br /> Food, It's an <br /> Experience.
        </h1>
        <div className={style.heroButtons}>
          <Link href="/menu">
            <Button text="View Menu" isRed={true} />
          </Link>
          <Link href="/book">
            <Button text="Book A Table" isRed={false} />
          </Link>
        </div>
        <div className={style.reviewContainer}>
          <p className={style.reviewTitle}>Reviews</p>
          <div className={style.reviewPics}>
            {reviews.map((review, key) => (
              <div
                key={key}
                className={style.reviewPicContainer}
                style={{ transform: `translateX(calc(-20px * ${key}))` }}
              >
                <Image
                  src={review.photoURL}
                  width={40}
                  height={40}
                  alt=""
                  className={style.reviewPic}
                />
              </div>
            ))}
          </div>
          <div className={style.reviewStars}>
            <Star className={style.reviewStar} />
            <Star className={style.reviewStar} />
            <Star className={style.reviewStar} />
            <Star className={style.reviewStar} />
            <Star className={style.reviewStar} />
          </div>
        </div>
      </div>
      <div className={style.heroRightContainer}>
        <Image
          layout="fill"
          src="/img/salade-tomate.png"
          alt="salade de "
          className={style.heroImg}
        />
        <div className={style.heroPopUpContainer}>
          <div className={style.heroPopUpIconWrapper}>
            <WorkspacePremiumOutlined className={style.heroPopUpIcon} />
            <p className={style.heroPopUpAmount}>5%</p>
            <p className={style.heroPopUpText}>
              <span>Discount</span> for 2 orders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
