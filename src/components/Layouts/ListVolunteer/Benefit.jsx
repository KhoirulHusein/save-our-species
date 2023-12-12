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
      icon: <FontAwesomeIcon icon={faShieldDog} className="w-9 h-9 sm:w-5 sm:h-5 md:w-7 md:h-7" color="white" />,
    },
    {
      id: 2,
      title: 'Eksplorasi Alam',
      description: 'Rasakan eksplorasi dan petualangan di habitat alami para satwa.',
      icon: <FontAwesomeIcon icon={faTree} className="w-9 h-9 sm:w-5 sm:h-5 md:w-7 md:h-7" color="white" />,
    },
    {
      id: 3,
      title: 'Komunitas Baru',
      description: 'Masuk komunitas peduli  hewan dan bekerja bersama untuk menciptakan perubahan positif bagi satwa di Indonesia.',
      icon: <FontAwesomeIcon icon={faHandshakeAlt} className="w-9 h-9 sm:w-5 sm:h-5 md:w-7 md:h-7" color="white" />,
    },
    {
      id: 4,
      description: 'Berpartisipasi dalam konservasi, rasakan eksplorasi dan petualangan, dan masuk ke dalam komunitas peduli hewan.',
      icon: (
        <div className="flex">
          <FontAwesomeIcon icon={faShieldDog} className="w-3 h-3 xs:w-5 xs:h-5 md:w-7 md:h-7" color="white" />
          <FontAwesomeIcon icon={faTree} className="w-3 h-3 xs:w-5 xs:h-5 md:w-7 md:h-7" color="white" />
          <FontAwesomeIcon icon={faHandshakeAlt} className="w-3 h-3 xs:w-5 xs:h-5 md:w-7 md:h-7" color="white" />
        </div>
      ),
    },
  ];

  return (
    <List className="flex justify-center gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className={`bg-deep_orange-300 rounded-[30px] p-4 flex flex-col items-center text-white max-w-[270px] h-[225px] xs:max-w-[200px] xs:max-h-[155px] sm:max-w-[260px] sm:max-h-[150px] sm:p-6 md:max-w-[190px] md:max-h-[210px] lg:max-w-[200px] lg:max-h-[250px] ${item.id === 4 ? 'hidden sm:flex' : 'sm:hidden'}`}
        >
          <div className="mb-0">{item.icon}</div>
          <Text
            className="mt-2 text-orange-50 text-center xs:text-xs sm:text-sm md:text-base text-lg"
            size="txtUbuntuBold20"
          >
            {item.title}
          </Text>
          <Text
            className="leading-[15.00px] xs:text-2xs sm:text-xs md:text-sm text-md text-center text-orange-50 w-full"
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
