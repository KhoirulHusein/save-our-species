import React from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
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
              <div className="card-status flex text-center items-center text-white-A700">
                <img src={`${statusIcon}`} alt="" />
                <p className="text-sm">{status}</p>
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
  showStatus: true,
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
