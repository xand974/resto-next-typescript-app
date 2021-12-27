import style from "../styles/productitem.module.css";
import Image from "next/image";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { DishType } from "../helpers/data";

type ProductItemType = {
  item: DishType;
};

export default function ProductItem({ item }: ProductItemType) {
  return (
    <div className={style.productItem}>
      <div className={style.productItemImageContainer}>
        <Image
          src={item.photoURL}
          layout="fill"
          alt="special salad from our store"
          objectFit="cover"
        />
        <button className={style.productItemBtn}>
          <ShoppingCartOutlined className={style.productItemCartIcon} />
        </button>
      </div>
      <div className={style.productItemInfoContainer}>
        <p className={style.productItemBigText}>{item.title}</p>
        <p className={style.productItemSmallText}>
          {item.withVegetable ? "With Vegetable" : "With Meat"}
        </p>
      </div>

      <div className={style.productItemPriceContainer}>
        <p className={style.productItemPriceText}>${item.price}</p>
      </div>
    </div>
  );
}
