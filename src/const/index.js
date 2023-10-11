/* eslint-disable import/prefer-default-export */
import {
  FaCity,
  FaEnvelopeOpenText,
  FaClipboardList,
  FaBell,
  FaMoneyBill,
} from 'react-icons/fa';
import { MdPerson, MdBookmarks, MdPeople } from 'react-icons/md';
import { LiaSearchSolid } from 'react-icons/lia';
import { AiFillNotification } from 'react-icons/ai';
import { LuVote } from 'react-icons/lu';
import { BsShieldFillCheck, BsThreeDots } from 'react-icons/bs';

export const LSideLinks = [
  {
    title: 'Home',
    icon: FaCity,
    link: '/',
  },
  {
    title: 'Discover',
    icon: LiaSearchSolid,
    link: 'discover',
  },
  {
    title: 'Notifications',
    icon: FaBell,
    link: 'notifications',
  },
  {
    title: 'Messages',
    icon: FaEnvelopeOpenText,
    link: 'messages',
  },
  {
    title: 'Communities',
    icon: MdPeople,
    link: 'communities',
  },
  {
    title: 'Vote',
    icon: LuVote,
    link: 'vote',
  },
  {
    title: 'List',
    icon: FaClipboardList,
    link: 'list',
  },
  {
    title: 'Bookmarks',
    icon: MdBookmarks,
    link: 'bookmarks',
  },
  {
    title: 'Verified',
    icon: BsShieldFillCheck,
    link: 'verified',
  },
  {
    title: 'Monetize',
    icon: FaMoneyBill,
    link: 'monetize',
  },
  {
    title: 'Profile',
    icon: MdPerson,
    link: 'username',
  },
];