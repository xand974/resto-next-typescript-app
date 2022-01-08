import style from "../styles/productitem.module.css";
import Image from "next/image";
import { ShoppingCartOutlined } from "@mui/icons-material";
import Link from "next/link";
import ProductInterface from "../interfaces/product.interface";
type ProductItemType = {
  item: ProductInterface;
};

export default function ProductItem({ item }: ProductItemType) {
  return (
    <Link href={`/products/${item._id}`}>
      <div className={style.productItem}>
        <div className={style.productItemImageContainer}>
          <Image
            src={item.img}
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
            {item.withVegetables ? "With Vegetable" : "With Meat"}
          </p>
        </div>

        <div className={style.productItemPriceContainer}>
          <p className={style.productItemPriceText}>${item.prices[0]}</p>
        </div>
      </div>
    </Link>
  );
}
