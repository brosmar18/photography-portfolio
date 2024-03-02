import "./Footer.scss";
import {
  be,
  email,
  facebook,
  instagram,
  linkedin,
  twitter,
} from "../../assets";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Contact Us</h2>
      <div className="images">
        <img src={be} alt="be" />
        <img src={email} alt="email" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={linkedin} alt="linkedin" />
        <img src={twitter} alt="twitter" />
      </div>
      <p>&copy; 2023 Lenscop Media.</p>
    </div>
  );
};

export default Footer;
