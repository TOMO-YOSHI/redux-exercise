import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

import './Footer.style.scss';

const Footer = () => {
    return (
      <footer className="pageFooter">
        <div className="nameAndCopyDiv">
          <p className="authorName">Author: Tomohiro Yoshida</p>
          <p className="footerCopyright">
            &copy; 2020 Chat Place. All Rights Reserved
          </p>
        </div>

        <ul className="contactList">
          <li className="linkedinItem">
            <a href="https://www.linkedin.com/in/tomohiro-yoshida-a8320816a/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="githubItem">
            <a href="https://github.com/TOMO-YOSHI">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="mailItem">
            <a href="mailto: tyoshida01@mylangara.ca">
              <FontAwesomeIcon icon={faMailBulk} />
            </a>
          </li>
        </ul>
      </footer>
    );
}

export default Footer;