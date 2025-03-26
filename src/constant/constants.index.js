import { FiShoppingBag } from "react-icons/fi";
import { GiCardboardBoxClosed, GiCardboardBox, GiPapers } from "react-icons/gi";
import { LuBox } from "react-icons/lu";
import { LiaTapeSolid } from "react-icons/lia";
import { TbCards } from "react-icons/tb";
import { SlEnvolopeLetter } from "react-icons/sl";
import { PiStickerDuotone } from "react-icons/pi";
import { PiBuildingOffice } from "react-icons/pi";

import shoppingBag from "../assets/ProductsMockup/shoppingBag.jpg";
import hardBox from "../assets/ProductsMockup/hardBox.jpg";
import moghava from "../assets/ProductsMockup/moghava.jpg";
import keyboardBox from "../assets/ProductsMockup/keyboardBox.jpg";
import parchmentPaper from "../assets/ProductsMockup/parchmentPaper.jpg";
import customerCard from "../assets/ProductsMockup/customerCard.jpg";
import label from "../assets/ProductsMockup/label.jpg";
import clothTag from "../assets/ProductsMockup/clothTag.jpg";
import ribbon from "../assets/ProductsMockup/ribbon.jpg";
import officeSet from "../assets/ProductsMockup/officeSet.jpg";

export const ServiceData = [
  {
    icon: FiShoppingBag,
    title: "شاپینگ بگ",
    content:
      "جهت اطلاعات بیشتر راجع به جنس بگ، نوع بند، خدمات کوب و نوع تکسکچر کلیک کنید",
    backgroundImage: shoppingBag,
  },
  {
    icon: GiCardboardBoxClosed,
    title: "هاردباکس",
    content:
      "جهت اطلاعات بیشتر راجع به جنس باکس، خدمات کوب و نوع تکسکچر کلیک کنید",

    backgroundImage: hardBox,
  },
  {
    icon: GiCardboardBox,
    title: "باکس مقوایی",
    content:
      "جهت اطلاعات بیشتر راجع به نوع باکس ،جنس  خدمات کوب و نوع تکسکچر کلیک کنید",

    backgroundImage: moghava,
  },
  {
    icon: LuBox,
    title: "باکس کیبوردی",
    content:
      "جهت اطلاعات بیشتر راجع به جنس باکس ،خدمات کوب و نوع تکسکچر کلیک کنید",

    backgroundImage: keyboardBox,
  },
  {
    icon: GiPapers,
    title: "کاغذ پوستی",
    content: "جهت اطلاعات بیشتر راجع به جنس کاغذ و خدمات چاپ کلیک کنید",

    backgroundImage: parchmentPaper,
  },
  {
    icon: PiStickerDuotone,
    title: "لیبل",
    content: "جهت اطلاعات بیشتر راجع به خدمات مربوط به چاپ لیبل کلیک کنید",
    backgroundImage: label,
  },
  {
    icon: SlEnvolopeLetter,
    title: "کارت و پاکت کاستومر",
    content: "جهت اطلاعات بیشتر راجع به خدمات کلیک کنید",
    backgroundImage: customerCard,
  },
  {
    icon: TbCards,
    title: "کارت آویز و اتیکت پشت یقه",
    content: "جهت اطلاعات بیشتر راجع به خدمات کلیک کنید",
    backgroundImage: clothTag,
  },
  {
    icon: LiaTapeSolid,
    title: "ربان چاپی",
    content: "جهت اطلاعات بیشتر راجع به خدمات مربوط به چاپ ربان کلیک کنید",
    backgroundImage: ribbon,
  },
  {
    icon: PiBuildingOffice,
    title: "ست اداری",
    content: "جهت اطلاعات بیشتر راجع به محصولات مربوط به ست اداری کلیک کنید",
    backgroundImage: officeSet,
  },
];
