import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { sliderItems, DishType } from "../helpers/data";
import style from "../styles/productlist.module.css";
import ProductItem from "./ProductItem";
import ProductInterface from "../interfaces/product.interface";

interface ProductListInterface {
  items: ProductInterface[];
}

export default function ProductList({ items }: ProductListInterface) {
  const [sliderIndex, setSliderIndex] = useState<number>(1);
  const container = useRef<HTMLDivElement>(null);
  const [sliderItem, setSliderItem] = useState<DishType[]>([]);

  const handleClick = (value: string) => {
    if (value === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : sliderItem.length - 4);
      if (container.current !== null) {
        container.current.style.transform = `translateX(${
          -20 * sliderIndex
        }vw)`;
      }
    } else if (value === "right") {
      setSliderIndex(sliderIndex < sliderItem.length - 4 ? sliderIndex + 1 : 0);
      if (container.current !== null) {
        container.current.style.transform = `translateX(${
          -20 * sliderIndex
        }vw)`;
      }
    }
  };

  useEffect(() => {
    setSliderItem(sliderItems);
  }, []);

  return (
    <div className={style.productList}>
      <div className={style.leftArrowContainer}>
        <button className={style.arrowBtn} onClick={() => handleClick("left")}>
          <ArrowBackIos className={style.arrowIcon} />
        </button>
      </div>
      <div className={style.sliderItems} ref={container}>
        {items.map((item, key) => (
          <ProductItem key={key} item={item} />
        ))}
      </div>
      <div className={style.rightArrowContainer}>
        <button className={style.arrowBtn} onClick={() => handleClick("right")}>
          <ArrowForwardIos className={style.arrowIcon} />
        </button>
      </div>
    </div>
  );
}
