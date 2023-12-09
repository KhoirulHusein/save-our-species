/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faLinkedin, faInstagram, faXTwitter, faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Text } from '../../Elements/Text/Texts';

function Footer() {
  return (
    <footer
      className="absolute bottom--1 w-full text-white text-center bg-gray-900_01"
    >
      <div className="mx-auto mt-[30px] d-flex justify-content-between">
        <a href="URL_GITHUB" target="_blank" rel="noopener noreferrer" className="mr-[10px] text-gray-900_01 bg-[white] p-[10px] rounded-[50px]">
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.5rem' }} />
        </a>
        <a href="URL_LINKEDIN" target="_blank" rel="noopener noreferrer" className="mr-[10px] text-gray-900_01 bg-[white] p-[10px] rounded-[50px]">
          <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '1.5rem' }} />
        </a>
        <a href="URL_INSTAGRAM" target="_blank" rel="noopener noreferrer" className="mr-[10px] text-gray-900_01 bg-[white] p-[10px] rounded-[50px]">
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1.5rem' }} />
        </a>
        <a href="URL_TWITTER" target="_blank" rel="noopener noreferrer" className="mr-[10px] text-gray-900_01 bg-[white] p-[10px] rounded-[50px]">
          <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: '1.5rem' }} />
        </a>
        <a href="URL_YOUTUBE" target="_blank" rel="noopener noreferrer" className="mr-[10px] text-gray-900_01 bg-[white] p-[10px] rounded-[50px]">
          <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '1.5rem' }} />
        </a>
      </div>
      <Text
        className="mt-[15px] mb-[15px] text-center text-white text-s md:text-xs sm:text-xs"
        size="txtUbuntuRegular25"
      >
        &copy; 2023 Save Our Species (SOS). All Rights Reserved.
      </Text>
    </footer>
  );
}

export default Footer;
