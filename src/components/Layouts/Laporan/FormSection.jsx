import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../../Elements/Text/Texts';
import { Input } from '../../Elements/Form/Input';
import { SelectBox } from '../../Elements/Form/Select';

const prioritasOptionsList = [
  { label: 'Tinggi', value: 'tinggi' },
  { label: 'Sedang', value: 'sedang' },
  { label: 'Rendah', value: 'pekerja' },
];

function FormSection() {
  return (
    <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-start mx-auto w-[50%]">
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
        className="md:ml-[0] p-0 w-full"
        wrapClassName="border border-blue_gray-900_01 border-solid flex mt-[19px] mx-auto w-full"
        shape="round"
        size="sm"
      />
      <Text
        className="md:ml-[0] mt-10 w-full text-white-A700 text-xl md:text-[15px]"
        size="txtUbuntuBold20WhiteA700"
      >
        Prioritas
      </Text>
      <SelectBox
        className="md:ml-[0] pt-1 pb-1 w-full md:text-[15px]"
        placeholderClassName="text-black-900"
        indicator={<FontAwesomeIcon icon={faCaretDown} className="h-[25px] w-2.5 text-green-800 cursor-pointer" />}
        isMulti={false}
        name="prioritas"
        options={prioritasOptionsList}
        isSearchable={false}
        placeholder="Tinggi"
        shape="round"
        color="white_A700"
        size="sm"
        variant="fill"
      />
      <Text
        className="md:ml-[0] mt-10 w-full text-white-A700 text-xl md:text-[15px]"
        size="txtUbuntuBold20WhiteA700"
      >
        Tempat Kejadian
      </Text>
      <Input
        labelName=""
        name="tempatKejadian"
        placeholder="Isi disini...."
        className="md:ml-[0] p-0 w-full"
        wrapClassName="border border-blue_gray-900_01 border-solid flex mt-[19px] mx-auto w-full"
        shape="round"
        size="sm"
      />
      <Text
        className="md:ml-[0] mt-10 w-full text-white-A700 text-xl md:text-[15px]"
        size="txtUbuntuBold20WhiteA700"
      >
        Ciri-ciri pelaku (Nama pelaku jika tahu)
      </Text>
      <Input
        labelName=""
        name="ciriPelaku"
        placeholder="Isi disini...."
        className="md:ml-[0] p-0 w-full"
        wrapClassName="border border-blue_gray-900_01 border-solid flex mt-[19px] mx-auto w-full"
        shape="round"
        size="sm"
      />
      <Text
        className="md:ml-[0] mt-10 w-full text-white-A700 text-xl md:text-[15px]"
        size="txtUbuntuBold20WhiteA700"
      >
        Deskripsi Kejadian
      </Text>
      <Input
        labelName=""
        name="namaPelapor"
        placeholder="Isi disini...."
        className="md:ml-[0] ml-0 p-0 w-full mt-[10px] h-48"
        wrapClassName="border border-blue_gray-900_01 border-solid flex mt-[19px] mx-auto w-full"
        shape="round"
        size="sm"
      />
    </div>
  );
}

export default FormSection;
