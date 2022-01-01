import style from "../styles/contact.module.css";
import Layout from "../components/Layout";
import { MailOutlined, PhoneOutlined, PinOutlined } from "@mui/icons-material";

export default function contact() {
  return (
    <Layout>
      <div className={style.contactContainer}>
        <div className={style.leftContainer}>
          <h1 className={style.contactTitle}>CONTACT US</h1>
          <p className={style.contactDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius
            ipsum in ex ut non corrupti architecto nostrum? Obcaecati quaerat
            aspernatur soluta suscipit eligendi itaque, libero laboriosam.
          </p>
          <strong className={style.contactTextInfo}>
            <PinOutlined />
            <span>555 Rankin Hill Rd Newport, Tennessee(TN), 37821</span>
          </strong>
          <strong className={style.contactTextInfo}>
            <MailOutlined /> <span>info@s9l9d.com </span>
          </strong>
          <div className={style.contactRowContainer}>
            <strong className={style.contactTextInfo}>
              <PhoneOutlined />
              <span>(423) 623-5576</span>
            </strong>
            <strong className={style.contactTextInfo}>
              <PhoneOutlined />
              <span>(422) 681-2786</span>
            </strong>
          </div>
        </div>
        <div className={style.rightContainer}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className={style.contactForm}
          >
            <div className={style.contactFormItem}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="full name" />
            </div>
            <div className={style.contactFormItem}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
              />
            </div>
            <div className={style.contactFormItem}>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="details of what you are looking for..."
              ></textarea>
            </div>
            <button className={style.contactFormBtn}>Send Message</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
