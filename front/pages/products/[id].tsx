import React from "react";
import Layout from "../../components/Layout";
import style from "../../styles/product.module.css";
import Image from "next/image";

export default function ProductItem() {
  return (
    <Layout>
      <div className={style.productContainer}>
        <div className={style.leftContainer}>
          <Image
            src="/img/salade-tomate.png"
            layout="fill"
            className={style.productImg}
          />
        </div>
        <div className={style.rightContainer}>
          <h1 className={style.productTitle}>CAMPAGNOLA</h1>
          <p className={style.productPrice}>$19.99</p>
          <p className={style.productDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            itaque incidunt sapiente ratione consequatur molestiae facere amet
            odit similique quod, dolore facilis qui nostrum eaque laboriosam
            distinctio dolorem iusto deleniti.
          </p>
          <form className={style.productForm}>
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
                  />
                </div>
                <div className={style.productInputItem}>
                  <label htmlFor="size3" className={style.productItemLabel}>
                    Large
                  </label>
                  <input
                    className={style.productInputRadio}
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
                  <input type="checkbox" value="peperoni" id="peperoni" />
                </div>
                <div className={style.productInputItem}>
                  <label htmlFor="cheesy" className={style.productItemLabel}>
                    Extra Cheese
                  </label>
                  <input type="checkbox" value="cheesy" id="cheesy" />
                </div>
                <div className={style.productInputItem}>
                  <label htmlFor="spicy" className={style.productItemLabel}>
                    Spicy Sauce
                  </label>
                  <input type="checkbox" value="spicy" id="spicy" />
                </div>
                <div className={style.productInputItem}>
                  <label htmlFor="garlic" className={style.productItemLabel}>
                    Garlic Sauce
                  </label>
                  <input type="checkbox" value="garlic" id="garlic" />
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
