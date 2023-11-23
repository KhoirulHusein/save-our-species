/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faLinkedin, faInstagram, faXTwitter, faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#283618', position: 'absolute', bottom: 0, width: '100%',
      }}
      className="text-white p-4 text-center"
    >
      <div className="container d-flex justify-content-between">
        <div className="social-icons">
          <a href="URL_GITHUB" target="_blank" rel="noopener noreferrer" className="rounded-icon">
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.5rem' }} />
          </a>
          <a href="URL_LINKEDIN" target="_blank" rel="noopener noreferrer" className="rounded-icon">
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '1.5rem' }} />
          </a>
          <a href="URL_INSTAGRAM" target="_blank" rel="noopener noreferrer" className="rounded-icon">
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1.5rem' }} />
          </a>
          <a href="URL_TWITTER" target="_blank" rel="noopener noreferrer" className="rounded-icon">
            <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: '1.5rem' }} />
          </a>
          <a href="URL_YOUTUBE" target="_blank" rel="noopener noreferrer" className="rounded-icon">
            <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '1.5rem' }} />
          </a>
        </div>
      </div>

      <div className="container mt-3">
        <p>&copy; 2023 Save Our Species (SOS). All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
