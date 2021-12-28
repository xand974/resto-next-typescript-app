import React from "react";
import Layout from "../../components/Layout";
import style from "../../styles/order.module.css";
import Image from "next/image";

export default function Order() {
  return (
    <Layout>
      <div className={style.orderContainer}>
        <div className={style.orderLeftContainer}>
          <div className={style.orderLeftWrapper}>
            <table className={style.orderLeftTable}>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123983776391</td>
                  <td>John Martin</td>
                  <td>200 avenue de la république, Paris - France</td>
                  <td>$109.99</td>
                </tr>
              </tbody>
            </table>
            <div className={style.orderLeftBottom}>
              <div className={style.orderLeftItem}>
                <div className={style.orderLeftImgContainer}>
                  <Image
                    src="/img/paid.png"
                    alt=""
                    layout="fill"
                    className={style.orderLeftItemImg}
                  />
                </div>
                <span>Payment</span>
              </div>
              <div className={style.orderLeftItem}>
                <div className={style.orderLeftImgContainer}>
                  <Image
                    src="/img/bake.png"
                    alt=""
                    layout="fill"
                    className={style.orderLeftItemImg}
                  />
                </div>
                <span>Preparing</span>
              </div>
              <div className={style.orderLeftItem}>
                <div className={style.orderLeftImgContainer}>
                  <Image
                    src="/img/food-delivery.png"
                    alt=""
                    layout="fill"
                    className={style.orderLeftItemImg}
                  />
                </div>
                <span>On the way</span>
              </div>
              <div className={style.orderLeftItem}>
                <div className={style.orderLeftImgContainer}>
                  <Image
                    src="/img/delivered.png"
                    alt=""
                    layout="fill"
                    className={style.orderLeftItemImg}
                  />
                </div>
                <span>Delivered</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.orderRightContainer}>
          <div className={style.orderRightWrapper}>
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
