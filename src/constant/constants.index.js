import {
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import { GiCardboardBoxClosed, GiCardboardBox } from "react-icons/gi";

import SpaceCity1 from "../assets/SpaceCity1.jpg";
import SpaceCity6 from "../assets/SpaceCity2.jpg";
import SpaceCity5 from "../assets/SpaceCity3.jpg";
import SpaceCity7 from "../assets/SpaceCity4.jpg";
import SpaceCity8 from "../assets/SpaceCity5.jpg";
import SpaceCity9 from "../assets/SpaceCity6.jpg";

export const ServiceData = [
  {
    icon: FiShoppingBag,
    title: "شاپینگ بگ",
    content:
      "جهت اطلاعات بیشتر راجع به جنس بگ، نوع بند، خدمات کوب و نوع تکسکچر کلیک کنید",
    backgroundImage: SpaceCity9,
  },
  {
    icon: GiCardboardBoxClosed,
    title: "هاردباکس",
    content:
      "جهت اطلاعات بیشتر راجع به جنس باکس، خدمات کوب و نوع تکسکچر کلیک کنید",

    backgroundImage: SpaceCity1,
  },
  {
    icon: GiCardboardBox,
    title: "باکس مقوایی",
    content:
      "جهت اطلاعات بیشتر راجع به نوع باکس ،جنس  خدمات کوب و نوع تکسکچر کلیک کنید",

    backgroundImage: SpaceCity6,
  },
  {
    icon: RxReader,
    title: "Seo",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity7,
  },
  {
    icon: RxAccessibility,
    title: "Management",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity5,
  },
  {
    icon: RxRocket,
    title: "Production",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity8,
  },
];
