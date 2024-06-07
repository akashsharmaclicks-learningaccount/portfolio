import "./Footer.css";
// import footer_logo from "../../assets/footer_logo.svg";
import akash_logo from "../../assets/akash_logo.png";
import user_icon from "../../assets/user_icon.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={akash_logo} alt="FOOTER LOGO" />
          <p>
            I am a full stack MERN developer from India with 2 years of
            experience at CG Infinity, creating efficient web applications and
            ensuring client satisfaction.{" "}
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="USER ICON" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Akash Sharma. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
