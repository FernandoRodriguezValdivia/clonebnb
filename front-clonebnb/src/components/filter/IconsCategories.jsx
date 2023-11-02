'use client'

import {
  MdOutlineVilla,
  MdOutlineKayaking,
  MdOutlineApartment,
  MdOutlineBeachAccess,
  MdPool,
  MdOutlineHouseSiding,
  MdOutlineBed
} from 'react-icons/md';
import { TbBuildingCottage, TbCaravan } from 'react-icons/tb';
import { GiForestCamp } from 'react-icons/gi'

export const IconsCategories = ({catId}) => {

  const icons = [
    {
      id: 'Casas de campo',
      icon: <TbBuildingCottage />
    },
    {
      id: 'Cabañas',
      icon: <MdOutlineHouseSiding />
    },
    {
      id: 'Casas de playa',
      icon: <MdOutlineBeachAccess />
    },
    {
      id: 'Frente al lago',
      icon: <MdOutlineKayaking />
    },
    {
      id: 'Minicasas',
      icon: <MdOutlineVilla />
    },
    {
      id: 'Habitaciones',
      icon: <MdOutlineBed />
    },
    {
      id: 'Departamentos',
      icon: <MdOutlineApartment />
    },
    {
      id: 'Campamentos',
      icon: <GiForestCamp />
    },
    {
      id: 'Casas rodantes',
      icon: <TbCaravan />
    },
    {
      id: 'Piscinas',
      icon: <MdPool />
    }
  ];

  return (
    <>
      {icons.map((item) => (
        <span key={item.id} className={`text-[1.4rem] pointer-events-none ${catId === item.id ? 'block' : 'hidden'}`}>
          {item.icon}
        </span>
      ))}
    </>
  );
}