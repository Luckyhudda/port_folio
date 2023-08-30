/* eslint-disable react/no-unescaped-entities */
import styles from './Contect.module.css';
import emailImage from '../../images/email.png'
const Contect = () => {
  
  return (
    <section className="Contect mt-5 pt-3">
      <div className="container mt-5">
        <div className={`row ${styles.centerData}`}>
          <h1>Take A Coffee & Chat With Me</h1>
          <div className={` col-12 ${styles.mailBox}`}>
            <div className={`${styles.emailContainer} emailTheme`}>
              <img src={emailImage} alt="email" />
              <a href="mailto:mr.luckyhudda@gmail.com">mr.luckyhudda.com</a>
            </div>
          </div>
        </div>
        <div className={`row ${styles.centerData}`}>
          <div className={`col-12 ${styles.formBox}`}>
            <form action="https://formspree.io/f/xzblralv" method="POST">
              <div className={styles.inputBox}>
                <input
                  className={`inputTheme ${styles.inputText}`}
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  required
                ></input>
              </div>
              <div className={styles.inputBox}>
                <input
                  className={`inputTheme ${styles.inputText}`}
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  autoComplete="off"
                  required
                ></input>
              </div>
              <div>
                <textarea
                  className={`inputTheme ${styles.inputText}`}
                  placeholder="Your Message"
                  name="message"
                  cols="30"
                  rows="5"
                  required
                  minLength={"10"}
                ></textarea>
              </div>
              <button type="submit" className={styles.inputFormBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contect;