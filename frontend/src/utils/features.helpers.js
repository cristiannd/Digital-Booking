import { IoIosWifi } from 'react-icons/io'
import { GiKitchenTap, GiPerspectiveDiceSixFacesThree } from 'react-icons/gi'
import { AiFillCar } from 'react-icons/ai'
import { MdPets, MdSmokeFree, MdOutlineLocalBar } from 'react-icons/md'
import { FaSwimmer, FaBath, FaUmbrellaBeach, FaTableTennis } from 'react-icons/fa'
import { BsSnow } from 'react-icons/bs'
import { IoTvSharp } from 'react-icons/io5'
import { CgGym } from 'react-icons/cg'

export const featureList = [
  {
    name: 'wifi',
    icon: <IoIosWifi />,
  },
  {
    name: 'cocina',
    icon: <GiKitchenTap />,
  },
  {
    name: 'apto mascotas',
    icon: <MdPets />,
  },
  {
    name: 'pileta',
    icon: <FaSwimmer />,
  },
  {
    name: 'aire acondicionado',
    icon: <BsSnow />,
  },
  {
    name: 'televisor',
    icon: <IoTvSharp />,
  },
  {
    name: 'estacionamiento gratuito',
    icon: <AiFillCar />,
  },
  {
    name: 'prohibido fumar',
    icon: <MdSmokeFree />,
  },
  {
    name: 'bar',
    icon: <MdOutlineLocalBar />,
  },
  {
    name: 'gimnasio',
    icon: <CgGym />,
  },
  {
    name: 'hidromasajes',
    icon: <FaBath />,
  },
  {
    name: 'casino',
    icon: <GiPerspectiveDiceSixFacesThree />,
  },
  {
    name: 'playa',
    icon: <FaUmbrellaBeach />,
  },
  {
    name: 'sala de juegos',
    icon: <FaTableTennis />,
  }
]
