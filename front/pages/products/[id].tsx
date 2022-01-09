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
  const [size, setSize] = useState("");
  const [addOptions, setAddOptions] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddOptions((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <Layout>
      <div className={style.productContainer}>
        <div className={style.leftContainer}>
          <Image src={salad.img} layout="fill" className={style.productImg} />
        </div>
        <div className={style.rightContainer}>
          <h1 className={style.productTitle}>{salad.title}</h1>
          <p className={style.productPrice}>${salad.prices[0]}</p>
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
                    onChange={(e) => setSize(e.target.value)}
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
                    onChange={(e) => setSize(e.target.value)}
                  />
                </div>
                <div className={style.productInputItem}>
                  <label htmlFor="size3" className={style.productItemLabel}>
                    Large
                  </label>
                  <input
                    className={style.productInputRadio}
                    onChange={(e) => setSize(e.target.value)}
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

              <div className={style.productInputContainer}>
                <div className={style.productInputItem}>
                  <label htmlFor="peperoni" className={style.productItemLabel}>
                    Peperoni
                  </label>
                  <input
                    type="checkbox"
                    value="peperoni"
                    id="peperoni"
                    onChange={handleChange}
                  />
                </div>
                <div className={style.productInputItem}>
                  <label htmlFor="cheesy" className={style.productItemLabel}>
                    Extra Cheese
                  </label>
                  <input
                    type="checkbox"
                    value="cheesy"
                    id="cheesy"
                    onChange={handleChange}
                  />
                </div>
                <div className={style.productInputItem}>
                  <label htmlFor="spicy" className={style.productItemLabel}>
                    Spicy Sauce
                  </label>
                  <input
                    type="checkbox"
                    value="spicy"
                    id="spicy"
                    onChange={handleChange}
                  />
                </div>
                <div className={style.productInputItem}>
                  <label htmlFor="garlic" className={style.productItemLabel}>
                    Garlic Sauce
                  </label>
                  <input
                    type="checkbox"
                    value="garlic"
                    id="garlic"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className={style.productInput}>
              <input
                type="number"
                min="1"
                defaultValue="1"
                name="quantity"
                max="10"
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
