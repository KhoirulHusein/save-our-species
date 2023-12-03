import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
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
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-start mx-auto w-[50%]">
        <Text
          className="md:ml-[0] mt-[11vh] w-full text-white-A700 text-xl"
          size="txtUbuntuBold20WhiteA700"
        >
          Nama
        </Text>
        <Input
          labelName=""
          name="rectangle563"
          placeholder=""
          className="md:ml-[0] p-0 w-full"
          wrapClassName="border border-blue_gray-900_01 border-solid flex mt-[19px] mx-auto w-full"
          shape="round"
          size="sm"
        />
        <Text
          className="md:ml-[0] mt-[35px] text-white-A700 text-xl w-full"
          size="txtUbuntuBold20WhiteA700"
        >
          Email
        </Text>
        <Input
          labelName=""
          name="group1806"
          placeholder="Isi disini...."
          className="md:ml-[0] font-bold leading-[normal] p-0 placeholder:text-black-900_6d text-[15px] text-left w-full"
          wrapClassName="border border-blue_gray-900_01 border-solid flex mt-[19px] mx-auto w-full"
          shape="round"
          size="sm"
        />
        <Text
          className="md:ml-[0] mt-[35px] text-white-A700 text-xl w-full"
          size="txtUbuntuBold20WhiteA700"
        >
          No. Telp
        </Text>
        <Input
          labelName=""
          name="group1806"
          placeholder="Isi disini...."
          className="md:ml-[0] font-bold leading-[normal] p-0 placeholder:text-black-900_6d text-[15px] text-left w-full"
          wrapClassName="border border-blue_gray-900_01 border-solid flex mt-[19px] mx-auto w-full"
          shape="round"
          size="sm"
        />
      </div>
      <div className="md:ml-0 mt-[35px] flex flex-row md:gap-5 items-center justify-center w-full">
        <div className="flex items-center md:ml-[100%]">
          <Text className="md:ml-[0] md:w-full text-white-A700 text-xl" size="txtUbuntuBold20WhiteA700">
            Status
          </Text>
          <SelectBox
            className="border border-blue_gray-900_01 border-solid font-bold leading-[normal] text-[15px] text-left w-full md:w-full ml-5"
            placeholderClassName="text-black-900"
            indicator={<FontAwesomeIcon icon={faCaretDown} className="h-[25px] mr-[0] w-2.5 text-green-800 cursor-pointer" />}
            isMulti={false}
            name="group1803"
            options={statusOptionsList}
            isSearchable={false}
            placeholder="Mahasiswa"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          />
        </div>
        <div className="flex items-center ml-10">
          <Text className="md:ml-[0] text-white-A700 text-xl" size="txtUbuntuBold20WhiteA700">
            Jenis kelamin
          </Text>
          <SelectBox
            className="border border-blue_gray-900_01 border-solid font-bold leading-[normal] text-[15px] text-left w-full md:ml-[0] md:w-full ml-5"
            placeholderClassName="text-black-900"
            indicator={<FontAwesomeIcon icon={faCaretDown} className="h-[25px] mr-[0] w-2.5 text-green-800 cursor-pointer" />}
            isMulti={false}
            name="group1802"
            options={genderOptionsList}
            isSearchable={false}
            placeholder="Pria"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          />
        </div>
        <div className="flex items-center ml-10">
          <Text className="md:ml-[0] md:w-full text-white-A700 text-xl" size="txtUbuntuBold20WhiteA700">
            Umur
          </Text>
          <SelectBox
            className="border border-blue_gray-900_01 border-solid font-bold leading-[normal] text-[15px] text-left w-full d:ml-[0] md:w-full ml-5"
            placeholderClassName="text-black-900"
            indicator={<FontAwesomeIcon icon={faCaretDown} className="h-[25px] mr-[0] w-2.5 text-green-800 cursor-pointer" />}
            isMulti={false}
            name="group1801"
            options={umurList}
            isSearchable={false}
            placeholder="23"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          />
        </div>
      </div>
    </>
  );
}

export default FormSection;
