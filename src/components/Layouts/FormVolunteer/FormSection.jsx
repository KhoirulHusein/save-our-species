/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../Elements/Button/Buttons';
import { Text } from '../../Elements/Text/Texts';
import { Input } from '../../Elements/Form/Input';
import { SelectBox } from '../../Elements/Form/Select';

const statusOptionsList = [
  { label: 'Pelajar', value: 'pelajar' },
  { label: 'Mahasiswa', value: 'mahasiswa' },
  { label: 'Pekerja', value: 'pekerja' },
];
const genderOptionsList = [
  { label: 'Pria', value: 'pria' },
  { label: 'Wanita', value: 'wanita' },
];
const umurList = [
  { label: '18', value: '18' },
  { label: '19', value: '19' },
  { label: '20', value: '20' },
  { label: '21', value: '21' },
  { label: '22', value: '22' },
  { label: '23', value: '23' },
  { label: '24', value: '24' },
  { label: '25', value: '25' },
  { label: '26', value: '26' },
  { label: '27', value: '27' },
  { label: '28', value: '28' },
  { label: '29', value: '29' },
  { label: '30', value: '30' },
];

function FormSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    namaVolunteer: '',
    emailVolunteer: '',
    notelpVolunteer: '',
    statusVolunteer: '',
    genderVolunteer: '',
    umurVolunteer: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    namaVolunteer: '',
    emailVolunteer: '',
    notelpVolunteer: '',
    statusVolunteer: '',
    genderVolunteer: '',
    umurVolunteer: '',
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
      const response = await fetch('http://45.76.149.156/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/formvolunteersucces');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-start mx-auto w-[60%] md:w-[75%]">
        <div className="w-full">
          <Text
            className="md:ml-[0] mt-10 w-full text-white-A700 text-xl md:text-[17px]"
            size="txtUbuntuBold20WhiteA700"
          >
            Nama
          </Text>
          <Input
            labelName=""
            name="namaVolunteer"
            placeholder="Isi disini...."
            className="md:ml-[0] font-bold leading-[normal] p-2 placeholder:text-black-900_6d text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-900_01 border-solid flex mt-[19px] mx-auto w-full"
            shape="round"
            size="sm"
            value={formData.namaVolunteer}
            onChange={(e) => handleChange({ target: { name: 'namaVolunteer', value: e } })}
          />
          {validationErrors.namaVolunteer && (
          <small className="text-red-500">{validationErrors.namaVolunteer}</small>
          )}
        </div>
        <div className="w-full">
          <Text
            className="md:ml-[0] mt-[35px] text-white-A700 text-xl w-full md:text-[17px]"
            size="txtUbuntuBold20WhiteA700"
          >
            Email
          </Text>
          <Input
            labelName=""
            name="emailVolunteer"
            placeholder="Isi disini...."
            className="md:ml-[0] font-bold leading-[normal] p-2 placeholder:text-black-900_6d text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-900_01 border-solid flex mt-[19px] mx-auto w-full"
            shape="round"
            size="sm"
            value={formData.emailVolunteer}
            onChange={(e) => handleChange({ target: { name: 'emailVolunteer', value: e } })}
          />
          {validationErrors.emailVolunteer && (
          <small className="text-red-500">{validationErrors.emailVolunteer}</small>
          )}
        </div>
        <div className="w-full">
          <Text
            className="md:ml-[0] mt-[35px] text-white-A700 text-xl w-full md:text-[17px]"
            size="txtUbuntuBold20WhiteA700"
          >
            No. Telp
          </Text>
          <Input
            labelName=""
            name="notelpVolunteer"
            placeholder="Isi disini...."
            className="md:ml-[0] font-bold leading-[normal] p-2 placeholder:text-black-900_6d text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-900_01 border-solid flex mt-[19px] mx-auto w-full"
            shape="round"
            size="sm"
            value={formData.notelpVolunteer}
            onChange={(e) => handleChange({ target: { name: 'notelpVolunteer', value: e } })}
          />
          {validationErrors.notelpVolunteer && (
          <small className="text-red-500">{validationErrors.notelpVolunteer}</small>
          )}
        </div>

      </div>
      <div className="md:mx-auto md:ml-0 md:items-start md:w-[50%] mt-[35px] flex flex-row md:flex-col items-center md:place-items-start sm:place-items-baseline justify-center w-full">
        <div className="md:ml-[25%] flex items-center">
          <Text className="text-white-A700 text-xl md:text-[17px]" size="txtUbuntuBold20WhiteA700">
            Status
          </Text>
          <SelectBox
            className="border border-blue_gray-900_01 border-solid font-bold leading-[normal] text-[15px] text-left w-full ml-5 md:ml-8  md:pt-[5px] md:pb-[5px]"
            placeholderClassName="text-black-900 md:mr-[50vh] sm:mr-[10vh] xs:mr-[3vh]"
            indicator={<FontAwesomeIcon icon={faCaretDown} className="h-[25px] ml-10 mr-[0] md:ml-0 md:mr-0 w-2.5 text-green-800 cursor-pointer" />}
            isMulti={false}
            name="statusVolunteer"
            options={statusOptionsList}
            isSearchable={false}
            placeholder="Mahasiswa"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
            value={formData.statusVolunteer}
            onChange={(selectedOption) => handleChange({ name: 'statusVolunteer', value: selectedOption })}
          />
        </div>
        {validationErrors.statusVolunteer && (
        <small className="text-red-500 md:ml-[32vh] sm:ml-0">{validationErrors.statusVolunteer}</small>
        )}
        <div className="md:ml-[25%] flex items-center ml-7 md:mt-[35px]">
          <Text className="text-white-A700 text-xl md:text-[17px]" size="txtUbuntuBold20WhiteA700">
            Jenis kelamin
          </Text>
          <SelectBox
            className="border border-blue_gray-900_01 border-solid font-bold leading-[normal] text-[15px] text-left w-full ml-5 md:pt-[5px] md:pb-[5px]"
            placeholderClassName="text-black-900 md:mr-[57.5vh] sm:mr-[15vh] xs:mr-[7vh]"
            indicator={<FontAwesomeIcon icon={faCaretDown} className="h-[25px] ml-5 mr-[0] w-2.5 text-green-800 cursor-pointer" />}
            isMulti={false}
            name="genderVolunteer"
            options={genderOptionsList}
            isSearchable={false}
            placeholder="Pria"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
            value={formData.genderVolunteer}
            onChange={(selectedOption) => handleChange({ name: 'genderVolunteer', value: selectedOption })}
          />
        </div>
        {validationErrors.genderVolunteer && (
        <small className="text-red-500 md:ml-[32vh] sm:ml-0">{validationErrors.genderVolunteer}</small>
        )}
        <div className="md:ml-[25%] flex items-center ml-10 md:mt-[35px]">
          <Text className="text-white-A700 text-xl md:text-[17px]" size="txtUbuntuBold20WhiteA700">
            Umur
          </Text>
          <SelectBox
            className="border border-blue_gray-900_01 border-solid font-bold leading-[normal] text-[15px] text-left w-full ml-5 md:ml-11 md:pt-[5px] md:pb-[5px]"
            placeholderClassName="text-black-900 md:mr-[10vh] sm:mr-[15vh] xs:mr-[7vh]"
            indicator={<FontAwesomeIcon icon={faCaretDown} className="h-[25px] ml-5 mr-[0] w-2.5 text-green-800 cursor-pointer" />}
            isMulti={false}
            name="umurVolunteer"
            options={umurList}
            isSearchable={false}
            placeholder="23"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
            value={formData.umurVolunteer}
            onChange={(selectedOption) => handleChange({ name: 'umurVolunteer', value: selectedOption })}
          />
        </div>
        {validationErrors.umurVolunteer && (
        <small className="text-red-500 md:ml-[32vh] sm:ml-0">{validationErrors.umurVolunteer}</small>
        )}
      </div>

      <div className="bg-gray-900 font-ubuntu mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 p-0">
        <Button
          className="common-pointer cursor-pointer mx-auto mb-20 mt-20 text-center min-w-[198px] md:min-w-[198px] text-lg tracking-[-0.18px] transition-transform duration-300 transform hover:scale-105 sm:text-sm rounded-full"
          onClick={handleSubmit}
          shape="round"
          size="md"
          variant="fill"
          color="light_green_800"
        >
          Apply
        </Button>
      </div>
    </>
  );
}

export default FormSection;
