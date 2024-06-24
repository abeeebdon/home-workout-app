import { HistoryIcon, HomeIcon, TipsIcon, TrackerIcon } from './Icons'

type home = { id: number; src: string; text: string }[]
type navbar = { icon: JSX.Element; name: string; target: string }[]
export const home: home = [
  {
    id: 1,
    src: '/images/onboarding1.png',
    text: 'Improve your overall wellness in no time',
  },
  {
    id: 2,
    src: '/images/onboarding2.png',
    text: 'Easily track your nutrition and fitness level ',
  },
  {
    id: 3,
    src: '/images/onboarding3.png',
    text: 'Get personalized workout tailored for your fitness goals',
  },
  {
    id: 4,
    src: '/images/onboarding4.png',
    text: 'Stay motivated and track your progress',
  },
]

export const bottomNavbar: navbar = [
  {
    icon: <HomeIcon />,
    name: 'Home',
    target: 'home',
  },
  {
    icon: <TrackerIcon />,
    name: 'Tracker',
    target: 'tracker',
  },
  {
    icon: <HistoryIcon />,
    name: 'History',
    target: 'history',
  },
  {
    icon: <TipsIcon />,
    name: 'Tips',
    target: 'tips',
  },
]

type btnData = string[]
export const btnData: btnData = ['For you', 'Browse', 'Saved']

export const forYou: home = [
  {
    id: 2,
    src: '/images/image3.png',
    text: 'Easily  ',
  },
  {
    id: 3,
    src: '/images/image11.png',
    text: 'STRENGTH',
  },
  {
    id: 4,
    src: '/images/image11.png',
    text: 'STRENGTH',
  },
]
