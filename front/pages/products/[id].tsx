import React, { ChangeEvent, useState } from "react";
import Layout from "../../components/Layout";
import style from "../../styles/product.module.css";
import Image from "next/image";
import { publicRequest } from "../../axios";
import ProductInterface from "../../interfaces/product.interface";

interface ProductItemInterface {
  salad: ProductInterface;
}

export default function ProductItem({ salad }: ProductItemInterface) {
  const setSizePrice = (size: string): number => {
    switch (size) {
      case "small":
        return 0;
      case "medium":
        return 1;
      case "large":
        return 2;
      default:
        return 0;
    }
  };
  const [size, setSize] = useState("small");
  const [price, setPrice] = useState(salad.prices[0]);
  const [addOptions, setAddOptions] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddOptions((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handlePrice = (
    e: ChangeEvent<HTMLInputElement>,
    option: {
      price: number;
      text: string;
    }
  ) => {
    const checked = e.target.checked;

    if (checked) {
      setPrice(salad.prices[setSizePrice(size)] + option.price);
    } else {
      setPrice(salad.prices[setSizePrice(size)] - option.price);
    }
  };

  console.log(price);

  return (
    <Layout>
      <div className={style.productContainer}>
        <div className={style.leftContainer}>
          <Image src={salad.img} layout="fill" className={style.productImg} />
        </div>
        <div className={style.rightContainer}>
          <h1 className={style.productTitle}>{salad.title}</h1>
          <p className={style.productPrice}>${price}</p>
          <p className={style.productDesc}>{salad.desc}</p>
          <form
            className={style.productForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={style.productFormItem}>
              <label htmlFor="size" className={style.labelText}>
                Choose the size
              </label>
              <div className={style.productInputContainer}>
                <div className={style.productInputItem}>
                  <label htmlFor="size1" className={style.productItemLabel}>
                    Small
                  </label>
                  <input
                    className={style.productInputRadio}
                    name="size"
                    type="radio"
                    value="small"
                    onChange={(e) => {
                      setSize(e.target.value);
                      setPrice(salad.prices[setSizePrice(e.target.value)]);
                    }}
                  />
                </div>
                <div className={style.productInputItem}>
                  <label htmlFor="size2" className={style.productItemLabel}>
                    Medium
                  </label>
                  <input
                    className={style.productInputRadio}
                    name="size"
                    type="radio"
                    value="medium"
                    onChange={(e) => {
                      setSize(e.target.value);
                      setPrice(salad.prices[setSizePrice(e.target.value)]);
                    }}
                  />
                </div>
                <div className={style.productInputItem}>
                  <label htmlFor="size3" className={style.productItemLabel}>
                    Large
                  </label>
                  <input
                    className={style.productInputRadio}
                    onChange={(e) => {
                      setSize(e.target.value);
                      setPrice(salad.prices[setSizePrice(e.target.value)]);
                    }}
                    name="size"
                    type="radio"
                    value="large"
                  />
                </div>
              </div>
            </div>
            <div className={style.productFormItem}>
              <label htmlFor="additional" className={style.labelText}>
                Choose additional ingredients
              </label>
              {salad.extraOptions.map((item, key) => (
                <div className={style.productInputContainer} key={key}>
                  <div className={style.productInputItem}>
                    <label
                      htmlFor={item.text}
                      className={style.productItemLabel}
                    >
                      {item.text} - ${item.price}
                    </label>
                    <input
                      type="checkbox"
                      value={item.text}
                      id={item.text}
                      onChange={(e) => {
                        handleChange(e);
                        handlePrice(e, item);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className={style.productInput}>
              <input
                type="number"
                min="1"
                defaultValue="1"
                name="quantity"
                max="10"
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
              <button className={style.productBtn}>Add To Cart</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await publicRequest.get(`/products/${params.id}`);

  return {
    props: {
      salad: res.data.data,
    },
  };
};
