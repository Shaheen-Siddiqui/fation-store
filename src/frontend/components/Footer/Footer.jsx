import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom"

import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="fotr-texts">
        <h3>Terms</h3>
        <h3>Contect Us</h3>
        <h3> Your Account</h3>
      </div>
      <div className="fotr-icons">
        <Link to="https://github.com/Shaheen-Siddiqui/The-Decor-SuperMarket">
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </Link>
        <Link>
          <FontAwesomeIcon icon={faTwitter} size="2xl" />
        </Link>
        <Link to="https://www.linkedin.com/in/shaheen-siddiqui-7067ab22a/">
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </Link>
      </div>
    </footer>
  );
};
