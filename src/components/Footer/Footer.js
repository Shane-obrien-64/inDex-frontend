import gitLogo from "../../images/github_logo.svg";
import linkdenLogo from "../../images/linkden_icon.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__author">Developed by Shane O'Brien 2023</p>
      <ul className="footer__links">
        <li className="footer__list-item">
          <img className="footer__link-icon" src={gitLogo} />
          <a
            className="footer__link"
            href="https://github.com/Shane-obrien-64"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li className="footer__list-item">
          <img className="footer__link-icon" src={linkdenLogo}></img>
          <a
            className="footer__link"
            href="https://linkedin.com/in/shane-o-brien-0192a6275"
            target="_blank"
          >
            Linkden
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
