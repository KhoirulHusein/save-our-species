import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog, faTree, faHandshakeAlt } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../../Elements/Text/Texts';
import { List } from '../../Elements/List/List';

function BenefitListVolunteer() {
  const items = [
    {
      id: 1,
      title: 'Konservasi dan Lindungi',
      description: 'Berpartisipasi dalam konservasi  satwa liar untuk melestarikan keanekaragaman hayati Indonesia.',
      icon: <FontAwesomeIcon icon={faShieldDog} size="3x" color="white" />,
    },
    {
      id: 2,
      title: 'Eksplorasi Alam',
      description: 'Rasakan eksplorasi dan petualangan di habitat alami para satwa.',
      icon: <FontAwesomeIcon icon={faTree} size="3x" color="white" />,
    },
    {
      id: 3,
      title: 'Komunitas Baru',
      description: 'Masuk komunitas peduli  hewan dan bekerja bersama untuk menciptakan perubahan positif bagi satwa di Indonesia.',
      icon: <FontAwesomeIcon icon={faHandshakeAlt} size="3x" color="white" />,
    },
  ];

  return (
    <List className="flex justify-center gap-4 ">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-deep_orange-300 rounded-[20px] p-2 flex flex-col items-center text-white max-w-[270px] h-[225px] sm:max-w-[220px] sm:p-0 md:max-w-[210px] md:max-h-[250px] "
        >
          <div className="mb-0">{item.icon}</div>
          <Text
            className="mt-5 text-orange-50 text-xl xs:text-xs sm:text-sm md:text-base text-lg"
            size="txtUbuntuBold20"
          >
            {item.title}
          </Text>
          <Text
            className="leading-[15.00px] mt-4 xs:text-2xs sm:text-xs md:text-md text-base text-center text-orange-50 w-full"
            size="txtUbuntuRegular14"
          >
            {item.description}
          </Text>
        </div>
      ))}
    </List>
  );
}

export default BenefitListVolunteer;
