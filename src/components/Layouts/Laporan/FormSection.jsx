/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../../Elements/Text/Texts';
import { Input } from '../../Elements/Form/Input';
import { SelectBox } from '../../Elements/Form/Select';
import { Button } from '../../Elements/Button/Buttons';

const prioritasOptionsList = [
  { label: 'Tinggi', value: 'tinggi' },
  { label: 'Sedang', value: 'sedang' },
  { label: 'Rendah', value: 'rendah' },
];

function FormSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    namaPelapor: '',
    prioritasPelapor: '',
    tkpPelapor: '',
    ciriPelapor: '',
    deskripsiPelapor: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    namaPelapor: '',
    prioritasPelapor: '',
    tkpPelapor: '',
    ciriPelapor: '',
    deskripsiPelapor: '',
  });

  const handleChange = (e) => {
    if (e.target) {
      // Handle regular input changes
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (e && e.value) {
      // Handle SelectBox changes
      setFormData((prevData) => ({
        ...prevData,
        [e.name]: e.value,
      }));
    }
  };

  const handleSubmit = async () => {
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = 'Field ini tidak boleh kosong';
      } else {
        errors[key] = '';
      }
    });

    setValidationErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      return;
    }

    console.log('Mengirimkan Data Formulir:', formData);
    try {
      const response = await fetch('http://18.141.159.81/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/laporansucces');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-start mx-auto w-[60%] md:w-[75%]">
      <div className="w-full">
        <Text
          className="md:ml-[0] mt-10 w-full text-white-A700 text-xl md:text-[15px]"
          size="txtUbuntuBold20WhiteA700"
        >
          Nama Pelapor
        </Text>
        <Input
          labelName=""
          name="namaPelapor"
          placeholder="Isi disini...."
          className="md:ml-[0] p-2 w-full"
          wrapClassName="border border-blue_gray-900_01 border-solid flex mt-[19px] mx-auto w-full"
          shape="round"
          size="sm"
          value={formData.namaPelapor}
          onChange={(e) => handleChange({ target: { name: 'namaPelapor', value: e } })}
        />
        {validationErrors.namaPelapor && (
        <small className="text-red-500">{validationErrors.namaPelapor}</small>
        )}
      </div>
      <div className="w-full">
        <Text
          className="md:ml-[0] mt-10 md:mt-[10px] w-full text-white-A700 text-xl md:text-[15px]"
          size="txtUbuntuBold20WhiteA700"
        >
          Prioritas
        </Text>
        <SelectBox
          className="md:ml-[0] pt-[5px] pb-[5px] mt-[10px] w-full md:text-[15px]"
          placeholderClassName="text-black-900"
          indicator={<FontAwesomeIcon icon={faCaretDown} className="h-[25px] w-2.5 text-green-800 cursor-pointer" />}
          isMulti={false}
          name="prioritasPelapor"
          options={prioritasOptionsList}
          isSearchable={false}
          placeholder="Tinggi"
          shape="round"
          color="white_A700"
          size="sm"
          variant="fill"
          value={formData.prioritas}
          onChange={(selectedOption) => handleChange({ name: 'prioritasPelapor', value: selectedOption })}
        />
        {validationErrors.prioritasPelapor && (
        <small className="text-red-500">{validationErrors.prioritasPelapor}</small>
        )}
      </div>
      <div className="w-full">
        <Text
          className="md:ml-[0] mt-10 md:mt-[10px] w-full text-white-A700 text-xl md:text-[15px]"
          size="txtUbuntuBold20WhiteA700"
        >
          Tempat Kejadian
        </Text>
        <Input
          labelName=""
          name="tkpPelapor"
          placeholder="Isi disini...."
          className="md:ml-[0] p-2 w-full"
          wrapClassName="border border-blue_gray-900_01 border-solid flex mt-[19px] mx-auto w-full"
          shape="round"
          size="sm"
          value={formData.tkpPelapor}
          onChange={(e) => handleChange({ target: { name: 'tkpPelapor', value: e } })}
        />
        {validationErrors.tkpPelapor && (
        <small className="text-red-500">{validationErrors.tkpPelapor}</small>
        )}
      </div>
      <div className="w-full">
        <Text
          className="md:ml-[0] mt-10 md:mt-[10px] w-full text-white-A700 text-xl md:text-[15px]"
          size="txtUbuntuBold20WhiteA700"
        >
          Ciri-ciri pelaku (Nama pelaku jika tahu)
        </Text>
        <Input
          labelName=""
          name="ciriPelapor"
          placeholder="Isi disini...."
          className="md:ml-[0] p-2 w-full"
          wrapClassName="border border-blue_gray-900_01 border-solid flex mt-[19px] mx-auto w-full"
          shape="round"
          size="sm"
          value={formData.ciriPelapor}
          onChange={(e) => handleChange({ target: { name: 'ciriPelapor', value: e } })}
        />
        {validationErrors.ciriPelapor && (
        <small className="text-red-500">{validationErrors.ciriPelapor}</small>
        )}
      </div>
      <div className="w-full">
        <Text
          className="md:ml-[0] mt-10 md:mt-[10px] w-full text-white-A700 text-xl md:text-[15px]"
          size="txtUbuntuBold20WhiteA700"
        >
          Deskripsi Kejadian
        </Text>
        <textarea
          name="deskripsiPelapor"
          placeholder="Isi disini...."
          className="md:ml-[0] ml-0 p-2 w-full mt-[5px] h-48 border border-blue_gray-900_01 border-solid flex mt-[19px] mx-auto w-full rounded-sm md:text-[15px]"
          rows="4"
          value={formData.deskripsiPelapor}
          onChange={handleChange}
        />
        {validationErrors.deskripsiPelapor && (
        <small className="text-red-500">{validationErrors.deskripsiPelapor}</small>
        )}
      </div>
      <Button
        className="common-pointer cursor-pointer mx-auto mb-20 mt-20 text-center min-w-[198px] md:min-w-[198px] text-lg tracking-[-0.18px] transition-transform duration-300 transform hover:scale-105 sm:text-sm rounded-full bg-light_green_800"
        onClick={handleSubmit}
        shape="round"
        size="md"
        variant="fill"
        color="light_green_800"
      >
        Submit
      </Button>
    </div>
  );
}

export default FormSection;
