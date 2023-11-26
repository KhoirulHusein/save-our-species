/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import React from 'react';
import Button from '../button/Buttons';

// eslint-disable-next-line react/prop-types
function Form({ forReport = false, forApply = false }) {
  return (
    <form className="form-user max-w-sm mx-auto flex flex-col gap-6">
      {forReport && (
        <>
          <div>
            <label htmlFor="nama-pelapor" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Nama</label>
            <input type="text" id="nama-pelapor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="prioritas-lapor" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Prioritas</label>
            <select id="prioritas-lapor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

              <option>Tinggi</option>
              <option>Sedang</option>
              <option>Rendah</option>
            </select>
          </div>
          <div>
            <label htmlFor="tempat-kejadian" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Tempat Kejadian</label>
            <input type="text" id="tempat-kejadian" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="ciri-pelaku" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Ciri-Ciri Pelaku</label>
            <input type="text" id="ciri-pelaku" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="deskripsi-kejadian" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Deskripsi Kejadian</label>
            <textarea id="deskripsi-kejadian" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." />
          </div>
          <Button buttonText="Submit" />

        </>
      )}

      {forApply && (
      <>
        <div>
          <label htmlFor="nama-volunteer" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Nama</label>
          <input type="text" id="nama-volunteer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="email-pelapor" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Email</label>
          <input type="text" id="email-pelapor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="notelp-pelapor" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">No. Telp</label>
          <input type="text" id="notelp-pelapor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="flex gap-12 justify-center flex-wrap">
          <div>
            <label htmlFor="status-volunteer" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Status</label>
            <select id="status-volunteer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

              <option>Tinggi</option>
              <option>Sedang</option>
              <option>Rendah</option>
            </select>
          </div>
          <div>
            <label htmlFor="gender-volunteer" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Jenis Kelamin</label>
            <select id="gender-volunteer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

              <option>Tinggi</option>
              <option>Sedang</option>
              <option>Rendah</option>
            </select>
          </div>
          <div>
            <label htmlFor="umur-volunteer" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Umur</label>
            <select id="umur-volunteer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

              <option>Tinggi</option>
              <option>Sedang</option>
              <option>Rendah</option>
            </select>
          </div>
        </div>
        <Button buttonText="Apply Now" />

      </>
      )}
    </form>
  );
}

export default Form;
