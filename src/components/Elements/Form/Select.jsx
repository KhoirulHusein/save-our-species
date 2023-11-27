/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Select({
  priorityInput,
  statusInput,
  genderInput,
  ageInput,
}) {
  return (
    <>
      {priorityInput && (
        <div>
          <label htmlFor="priorityInput" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Prioritas</label>
          <select id="priorityInput" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Pelajar</option>
            <option>Sedang</option>
            <option>Rendah</option>
          </select>
        </div>
      )}

      {statusInput && (
        <div>
          <label htmlFor="statusInput" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Status</label>
          <select id="statusInput" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Tinggi</option>
            <option>Sedang</option>
            <option>Rendah</option>
          </select>
        </div>
      )}

      {genderInput && (
        <div>
          <label htmlFor="genderInput" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Jenis Kelamin</label>
          <select id="genderInput" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Pria</option>
            <option>Wanita</option>
            <option>Tidak ingin disebutkan</option>
          </select>
        </div>
      )}

      {ageInput && (
        <div>
          <label htmlFor="ageInput" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Umur</label>
          <select id="ageInput" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>13-19</option>
            <option>20-29</option>
            <option>30-39</option>
            <option>40-49</option>
            <option>50-59</option>
            <option>60-69</option>
            <option>70-79</option>
          </select>
        </div>
      )}
    </>
  );
}

Select.propTypes = {
  priorityInput: PropTypes.bool,
  statusInput: PropTypes.bool,
  genderInput: PropTypes.bool,
  ageInput: PropTypes.string,
};

Select.defaultProps = {
  priorityInput: false,
  statusInput: false,
  genderInput: false,
  ageInput: false,
};

export default Select;
