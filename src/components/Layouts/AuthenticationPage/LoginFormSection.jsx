import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Text } from '../../Elements/Text/Texts';
import { Input } from '../../Elements/Form/Input';
import { Button } from '../../Elements/Button/Buttons';

const LoginFormSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const handleLoginClick = () => {
    let isError = false;
    const errors = [];
    if (!validateEmail(email)) {
      isError = true;
      errors.push('Email tidak valid');
    }
    if (errors.length > 0) {
      isError = true;
      Swal.fire({
        title: 'Error',
        text: errors.join(', '),
        icon: 'error',
      });
    }

    if (!isError) {
      const url = 'https://api.saveourspecies.my.id/login';
      const data = {
        email,
        password,
      };
      axios.post(url, data, { withCredentials: true })
        .then(() => {
          Swal.fire({
            title: 'Sukses',
            text: 'Yeay berhasil login',
            icon: 'success',
          });
          navigate('/');
        })
        .catch((error) => {
          const errorMessage = error.request.response;
          Swal.fire({
            title: 'Error',
            text: errorMessage,
            icon: 'error',
          });
        });
    }
  };
  return (
    <div className="w-[500px] h-fit bg-gray-900_01  p-10 items-center lg:w-[450px] lg:h-fit md:w-full md:h-fit sm:w-[400px] sm:h-fit xs:w-fit xs:h-fit">
      <Text
        className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
        size="txtUbuntuBold36Deeporange800"
      >
        Login
      </Text>
      <div className="py-3">
        <Input
          isLabel
          inputId="email"
          labelName="Email"
          textLabelColor="text-white-A700"
          type="email"
          placeholder="Isi Email"
          className="w-full bg-blue_gray-100 border border-light_green-800 border-solid h-10 justify-center pl-[17px] sm:pr-5 pr-[35px] py-[11px] rounded-[5px] text-black-900_6d text-sm tracking-[-0.14px]"
          onChange={(value) => setEmail(value)}
        />
      </div>
      <div className="py-3">
        <Input
          isLabel
          inputId="password"
          labelName="Password"
          textLabelColor="text-white-A700"
          type="password"
          placeholder="Isi Password"
          className="w-full bg-blue_gray-100 border border-light_green-800 border-solid h-10 justify-center pl-[17px] sm:pr-5 pr-[35px] py-[11px] rounded-[5px] text-black-900_6d text-sm tracking-[-0.14px]"
          onChange={(value) => setPassword(value)}
        />
      </div>
      <div className="py-5 flex justify-center">
        <Button
          className="common-pointer cursor-pointer min-w-fit ml- text-center text-lg tracking-[-0.18px]"
          shape="round"
          color="light_green_800"
          size="customLogin"
          variant="fill"
          onClick={handleLoginClick}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginFormSection;
