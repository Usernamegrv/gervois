// import { useEffect } from "react";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <h2>
        Morgane Gervois <span>Développeuse Web & Mobile</span>
      </h2>

      <nav>
        <ul>
          <li>
            <a
              href="https://github.com/Usernamegrv"
              rel="noopener"
              target="_blank"
            >
              <img
                src="./github-white.svg"
                id="github-icone-white"
                alt="Logo github"
              />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/morgane-gervois-a85ba820a "
              rel="noopener"
              target="_blank"
            >
              <img
                src="./linkedin-white.svg"
                id="linkedin-logo-white"
                alt="Logo Linkedin"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;