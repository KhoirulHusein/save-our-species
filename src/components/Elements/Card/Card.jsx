import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../Button/Buttons';

function Card({
  showHeader,
  showStatus,
  showBlur,
  showButton,
  cardMaxWidth,
  headingColor,
  backgroundImage,
  name,
  description,
  idData,
  statusIcon,
  status,
  hiddenOption,
  buttonClass,
  buttonShape,
  buttonColor,
  buttonSize,
  buttonVariant,
  buttonText,
  buttonPath,
}) {
  const blurClass = showBlur ? 'backdrop-filter backdrop-blur-sm' : '';
  const navigate = useNavigate();

  const cardContent = (
    <div className={`card z-50 bg-cover bg-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pt-60 ${cardMaxWidth}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={`bg-opacity-95 ${blurClass} rounded-lg p-5`}>
        {showHeader && (
          <div className="card-header flex justify-between gap-4">
            <div className="card-headline flex">
              <h3 className={`font-bold text-secondary-4 ${headingColor}`}>
                {name}
              </h3>
            </div>
            {showStatus && (
              <div className={`card-status flex gap-2 text-center items-center text-sm sm:text-xs ${statusIcon}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-triangle-filled " width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" strokeWidth="0" fill="currentColor" />
                </svg>
                <p className="font-bold">{status}</p>
              </div>
            )}
          </div>
        )}
        <div className="card-description pb-6">
          <p className={`text-sm font-thin text-white mt-5 text-white-A700 ${hiddenOption}`}>
            {description}
          </p>
        </div>
        {showButton && (
          <Button
            className={`${buttonClass} z-50 hover:z-50 `}
            shape={buttonShape}
            color={buttonColor}
            size={buttonSize}
            variant={buttonVariant}
            onClick={() => navigate(buttonPath)}
          >
            {buttonText}
          </Button>

        )}
      </div>
    </div>
  );

  return showButton ? (
    cardContent
  ) : (
    <a href={`http://localhost:3000/${idData}`} className="z-0">
      {cardContent}
    </a>
  );
}

Card.propTypes = {
  showHeader: PropTypes.bool,
  showStatus: PropTypes.bool,
  showBlur: PropTypes.bool,
  showButton: PropTypes.bool,
  cardMaxWidth: PropTypes.string,
  headingColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  idData: PropTypes.string,
  statusIcon: PropTypes.string,
  status: PropTypes.string,
  hiddenOption: PropTypes.string,
  buttonClass: PropTypes.string,
  buttonShape: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonSize: PropTypes.string,
  buttonVariant: PropTypes.string,
  buttonText: PropTypes.string,
  buttonPath: PropTypes.string,
};

Card.defaultProps = {
  showHeader: true,
  showStatus: false,
  showBlur: true,
  showButton: false,
  cardMaxWidth: 'max-w-xs',
  headingColor: 'text-deep_orange-800',
  backgroundImage: '',
  name: '',
  description: '',
  idData: '',
  statusIcon: '',
  status: '',
  buttonClass: '',
  buttonShape: '',
  buttonColor: '',
  buttonSize: '',
  buttonVariant: '',
  buttonText: '',
  buttonPath: '/',
  hiddenOption: 'truncate',
};

export default Card;
