import React from "react";
import Layout from "../../components/Layout";
import style from "../../styles/order.module.css";
import Image from "next/image";

export default function Order() {
  const status = 0;

  const styleClass = (value: number) => {
    if (value - status < 1) return style.done;
    if (value - status === 1) return style.inProgress;
    if (value - status > 1) return style.undone;
  };
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
              <div className={styleClass(0)}>
                <div className={style.orderLeftImgContainer}>
                  <Image
                    src="/img/paid.png"
                    alt=""
                    layout="fill"
                    className={style.orderLeftItemImg}
                  />
                </div>
                <span>Payment</span>
                <div className={style.orderLeftChecked}>
                  <Image
                    src="/img/checked.png"
                    layout="fill"
                    className={style.orderLeftCheckedImg}
                  />
                </div>
              </div>
              <div className={styleClass(1)}>
                <div className={style.orderLeftImgContainer}>
                  <Image
                    src="/img/bake.png"
                    alt=""
                    layout="fill"
                    className={style.orderLeftItemImg}
                  />
                </div>
                <span>Preparing</span>
                <div className={style.orderLeftChecked}>
                  <Image
                    src="/img/checked.png"
                    layout="fill"
                    className={style.orderLeftCheckedImg}
                  />
                </div>
              </div>
              <div className={styleClass(2)}>
                <div className={style.orderLeftImgContainer}>
                  <Image
                    src="/img/food-delivery.png"
                    alt=""
                    layout="fill"
                    className={style.orderLeftItemImg}
                  />
                </div>
                <span>On the way</span>
                <div className={style.orderLeftChecked}>
                  <Image
                    src="/img/checked.png"
                    layout="fill"
                    className={style.orderLeftCheckedImg}
                  />
                </div>
              </div>
              <div className={styleClass(3)}>
                <div className={style.orderLeftImgContainer}>
                  <Image
                    src="/img/delivered.png"
                    alt=""
                    layout="fill"
                    className={style.orderLeftItemImg}
                  />
                </div>
                <span>Delivered</span>
                <div className={style.orderLeftChecked}>
                  <Image
                    src="/img/checked.png"
                    layout="fill"
                    className={style.orderLeftCheckedImg}
                  />
                </div>
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
