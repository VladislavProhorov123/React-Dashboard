import english from "/src/assets/English.svg";
import franch from "/src/assets/Franch.svg";
import spanish from "/src/assets/Espanion.svg";
import user from "/src/assets/user.svg";
import long from "/src/assets/long.svg";
import short from "/src/assets/short.svg";
import card2 from "/src/assets/card2.svg";
import card3 from "/src/assets/card3.svg";
import card4 from "/src/assets/card4.svg";

export const LANGUAGES = [
  { code: "en", name: "English", flag: english },
  { code: "ua", name: "French", flag: franch },
  { code: "es", name: "Español", flag: spanish },
];

export const CARD_DASHBOARD = [
  {
    id: 1,
    title: "Total User",
    number: "40,689",
    text: "Up from yesterday",
    percent: "8.5%",
    icon: long,
    color: "#E4E4FF",
    logo: user,
  },
  {
    id: 2,
    title: "Total Order",
    number: "10,293",
    text: "Up from past week",
    percent: "1.3%",
    icon: long,
    color: "#FEF2D6",
    logo: card2,
  },
  {
    id: 3,
    title: "Total Sales",
    number: "$89,000",
    text: "Down from yesterday",
    percent: "4.3%",
    icon: short,
    color: "#D9F7E7",
    logo: card3,
  },
  {
    id: 4,
    title: "Total Pending",
    number: "2,040",
    text: "Up from yesterday",
    percent: "1.8%",
    icon: long,
    color: "#FFDED2",
    logo: card4,
  },
];

export const DATA_CHARTS = [
  { name: "Янв", value: 400 },
  { name: "Фев", value: 3000 },
  { name: "Мар", value: 500 },
  { name: "Апр", value: 7000 },
  { name: "Май", value: 600 },
  { name: "Июн", value: 9000 },
];

