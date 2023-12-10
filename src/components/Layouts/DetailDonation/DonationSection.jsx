/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Button } from '../../Elements/Button/Buttons';
import { Text } from '../../Elements/Text/Texts';
import { Input } from '../../Elements/Form/Input';
import { CheckBox } from '../../Elements/CheckBox/CheckBoxs';

const DonationSection = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [amount, setAmount] = useState('');
  const [agreementChecked, setAgreementChecked] = useState(false);

  // get Token
  const [token, setToken] = useState('');

  // Validasi
  const [emailError, setEmailError] = useState('');
  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  // Generate Order ID
  const generateOrderId = () => {
    const randomString = Math.random().toString(36).substring(7);
    const timestamp = new Date().getTime();
    const order_id = `${randomString}-${timestamp}`;
    return order_id;
  };

  const process = async () => {
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }
    // clear email error
    setEmailError('');

    const order_id = generateOrderId();
    const data = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      amount: amount,
      order_id: order_id,
      agreementChecked: agreementChecked,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post('http://18.141.159.81/api/v1/payment', data, config);

    setToken(response.data.token);
  };

  useEffect(() => {
    if (token) {
      window.snap.pay(token, {
        onSuccess: (result) => {
          localStorage.setItem('Pembayaran', JSON.stringify(result));
          setToken('');
        },
        onPending: (result) => {
          localStorage.setItem('Pembayaran', JSON.stringify(result));
          setToken('');
        },
        onError: (error) => {
          console.log(error);
          setToken('');
        },
        onClose: () => {
          console.log('customer closed the popup without finishing the payment');
          setToken('');
        },
      });
      setEmail('');
      setFirstName('');
      setLastName('');
      setAmount('');
    }
  }, [token]);

  useEffect(() => {
    const midtransurl = 'https://app.sandbox.midtrans.com/snap/snap.js';

    let scriptTag = document.createElement('script');
    scriptTag.src = midtransurl;

    const midtransClientKey = 'SB-Mid-client-lGpWVxBMZHS4pBnj';
    scriptTag.setAttribute('data-client-key', midtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <div className="w-[500px] h-fit bg-gray-900_01 rounded-[20px] p-10 items-center lg:w-[450px] lg:h-fit md:w-full md:h-fit sm:w-fit sm:h-fit xs:w-fit xs:h-fit">
      <Text
        className="text-4xl sm:text-[32px] md:text-[34px] text-deep_orange-800"
        size="txtUbuntuBold36Deeporange800"
      >
        Ayo Berdonasi
      </Text>
      <Text
        className=" text-orange-50 text-xl w-fit mt-1 xs:text-sm"
        size="txtUbuntuLight20"
      >
        Untuk membatu hewan liar dan dilindung tetap terjaga tidak punah
      </Text>
      <div className="py-4">
        <Input
          isLabel={false}
          type="email"
          placeholder="Masukkan Email"
          className="w-full bg-blue_gray-100 border border-light_green-800 border-solid h-10 justify-center pl-[17px] sm:pr-5 pr-[35px] py-[11px] rounded-[5px] text-black-900_6d text-sm tracking-[-0.14px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      </div>
      <div className="flex py-2 gap-4">
        <Input
          isLabel={false}
          type="text"
          placeholder="First Name"
          className="w-full bg-blue_gray-100 border border-light_green-800 border-solid h-10 justify-center pl-[17px] sm:pr-5 pr-[35px] py-[11px] rounded-[5px] text-black-900_6d text-sm tracking-[-0.14px]"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          isLabel={false}
          type="text"
          placeholder="Last Name"
          className="w-full bg-blue_gray-100 border border-light_green-800 border-solid h-10 justify-center pl-[17px] sm:pr-5 pr-[35px] py-[11px] rounded-[5px] text-black-900_6d text-sm tracking-[-0.14px]"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <Text
        className="my-4 text-deep_orange-800 text-xl tracking-[-0.20px]"
        size="txtUbuntuBold20Deeporange800"
      >
        Jumlah Berdonasi
      </Text>
      <Input
        id="jumlah_donasi"
        isLabel={false}
        type="number"
        placeholder="Jumlah Donasi"
        className="w-full bg-blue_gray-100 border border-light_green-800 border-solid h-10 justify-center pl-[17px] sm:pr-5 pr-[35px] py-[11px] rounded-[5px] text-black-900_6d text-sm tracking-[-0.14px]"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <CheckBox
        className="mt-5 mb-5 text-[15px] text-left text-orange-50 xs:text-sm"
        inputClassName="border border-light_green-800 border-solid mr-3 w-5 h-5"
        name="aggreement"
        id="aggreement"
        checked={agreementChecked}
        onChange={() => setAgreementChecked(!agreementChecked)}
        label="Saya menyetujui syarat dan ketentuan yang berlaku"
      />
      <div className="flex justify-end">
        <Button
          className="common-pointer cursor-pointer min-w-fit ml- text-center text-lg tracking-[-0.18px]"
          onClick={process}
          shape="round"
          color="light_green_800"
          size="md"
          variant="fill"
        >
          Submit Donation
        </Button>
      </div>
    </div>
  );
};

export default DonationSection;
