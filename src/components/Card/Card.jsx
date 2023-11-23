import React from 'react';

// eslint-disable-next-line react/prop-types
function Card({
  // eslint-disable-next-line react/prop-types
  showHeader = true, showStatus = true, showBlur = true, showButton = true, namaButton = 'Apply Now', cardMaxWidth = 'max-w-xs',
}) {
  const blurClass = showBlur ? 'backdrop-filter backdrop-blur-sm' : '';

  return (
    <div className={`card bg-[url('https://images.pexels.com/photos/11771672/pexels-photo-11771672.jpeg')] bg-cover bg-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pt-60 ${cardMaxWidth}`}>
      <a href="http://localhost:3000/">
        <div className={`bg-opacity-95 ${blurClass} p-5`}>
          {showHeader && (
            <div className="card-header flex gap-4">
              <div className="card-headline flex">
                <h3 className="font-bold text-secondary-4">Noteworthy technology</h3>
              </div>
              {showStatus && (
                <div className="card-status flex text-center items-center">
                  <img src="status.svg" alt="" />
                  <p className="text-sm">status</p>
                </div>
              )}
            </div>
          )}
          <div className="card-description pb-6">
            <p className="text-sm font-thin text-white mt-5">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. </p>
          </div>
          {showButton && (
            <button className="bg-primary-color hover:bg-secondary-1 text-white font-bold py-2 px-4 rounded" type="submit">{namaButton}</button>
          )}
        </div>
      </a>
    </div>
  );
}

export default Card;
