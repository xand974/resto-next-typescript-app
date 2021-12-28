import React from "react";
import Layout from "../components/Layout";
import style from "../styles/cart.module.css";
import Image from "next/image";

export default function cart() {
  return (
    <Layout>
      <div className={style.cartContainer}>
        <div className={style.cartLeftContainer}>
          <table className={style.cartLeftTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Extra</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={style.cartItemImgContainer}>
                  <Image
                    src="/img/salade-tomate.png"
                    layout="fill"
                    className={style.cartItemImg}
                  />{" "}
                </td>
                <td className={style.cartItemName}>COMPAGNOLA</td>
                <td>Extra Cheese</td>
                <td>$19.99</td>
                <td>1</td>
                <td className={style.cartItemTotal}>
                  <strong>$19.99</strong>
                </td>
              </tr>
              <tr>
                <td className={style.cartItemImgContainer}>
                  <Image
                    src="/img/salade-thon.png"
                    layout="fill"
                    className={style.cartItemImg}
                  />{" "}
                </td>
                <td className={style.cartItemName}>COMPAGNOLA</td>
                <td>Extra Cheese, Frites</td>
                <td>$19.99</td>
                <td>1</td>
                <td className={style.cartItemTotal}>
                  <strong>$19.99</strong>
                </td>
              </tr>
              <tr>
                <td className={style.cartItemImgContainer}>
                  <Image
                    src="/img/salade-poulet.png"
                    layout="fill"
                    className={style.cartItemImg}
                  />{" "}
                </td>
                <td className={style.cartItemName}>COMPAGNOLA</td>
                <td>Extra Cheese, Garlic Sauce</td>
                <td>$19.99</td>
                <td>1</td>
                <td className={style.cartItemTotal}>
                  <strong>$19.99</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={style.cartRightContainer}>
          <div className={style.cartRightWrapper}>
            <h2>CART TOTAL</h2>

            <p>
              Subtotal: <span>$102.39</span>{" "}
            </p>
            <p>
              Discount: <span>$2.39</span>
            </p>
            <p>
              Total: <span>$100.00</span>{" "}
            </p>

            <button>CHECKOUT NOW!</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
