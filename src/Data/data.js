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
  { name: "5k", value: 0 },
  { name: "10k", value: 3000 },
  { name: "15k", value: 1500 },
  { name: "20k", value: 8490 },
  { name: "25k", value: 7900 },
  { name: "30k", value: 8000 },
  { name: "35k", value: 4900 },
  { name: "40k", value: 2050 },
  { name: "45k", value: 5700 },
  { name: "50k", value: 7630 },
  { name: "55k", value: 8400 },
  { name: "60k", value: 9100 },
];

export const DATA_CIRCLE = [
  {name: 'New Customers', value: 34249},
  {name: 'Repeated', value: 1420}
]
