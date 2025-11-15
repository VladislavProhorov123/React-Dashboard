import english from "/src/assets/English.svg";
import franch from "/src/assets/Franch.svg";
import spanish from "/src/assets/Espanion.svg";
import user from "/src/assets/user.svg";
import long from "/src/assets/long.svg";
import short from "/src/assets/short.svg";
import card2 from "/src/assets/card2.svg";
import card3 from "/src/assets/card3.svg";
import card4 from "/src/assets/card4.svg";
import watch from "/src/assets/apple-watch.jpg";
import air from "/src/assets/apple-hier.png";
import iphone from "/src/assets/iphone.png";
import iphone_card from "/src/assets/iphone1.jpg";

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
  { name: "New Customers", value: 34249 },
  { name: "Repeated", value: 1420 },
];

export const DATA_SWIPER = [
  { id: 1, title: "Apple Watch 2024", price: "$89.00", img: watch },
  { id: 2, title: "Apple AirPods 2019", price: "$157.90", img: air },
  { id: 3, title: "Iphone Innovation 2021", price: "$225.50", img: iphone },
];

export const DATA_SALES = [
  { name: 2015, revenue: 100, profit: 200 },
  { name: 2016, revenue: 700, profit: 900 },
  { name: 2017, revenue: 500, profit: 600 },
  { name: 2018, revenue: 250, profit: 150 },
  { name: 2019, revenue: 300, profit: 500 },
];

export const TABLE_DASHBOARD = [
  {
    id: 1,
    img: watch,
    name: "Apple Watch (2022)",
    location: "6087 Marjolaine Landing",
    date: "June",
    piece: 423,
    amount: "$39,395",
    status: "Delivered",
  },
  {
    id: 2,
    img: watch,
    name: "HomePod Mini (2021)",
    location: "6088 Marjolaine Landing",
    date: "May",
    piece: 406,
    amount: "$30,695",
    status: "Rejected",
  },
  {
    id: 3,
    img: watch,
    name: "AirPods Pro (2023)",
    location: "6089 Marjolaine Landing",
    date: "April",
    piece: 612,
    amount: "$39,950",
    status: "Pending",
  },
  {
    id: 4,
    name: "Apple TV 4K (2023)",
    location: "6090 Marjolaine Landing",
    date: "April",
    piece: 411,
    amount: "$31,200",
    status: "Delivered",
  },
  {
    id: 5,
    name: "Mac Pro (2024)",
    location: "6091 Marjolaine Landing",
    date: "May",
    piece: 90,
    amount: "$41,885",
    status: "Delivered",
  },
  {
    id: 6,
    name: "Mac Mini (2025)",
    location: "6092 Marjolaine Landing",
    date: "March",
    piece: 23,
    amount: "$19,440",
    status: "Pending",
  },
  {
    id: 7,
    name: "iMac 24 (2021)",
    location: "6093 Marjolaine Landing",
    date: "May",
    piece: 213,
    amount: "$7,999",
    status: "Pending",
  },
  {
    id: 8,
    name: "MacBook Air (2023)",
    location: "6094 Marjolaine Landing",
    date: "May",
    piece: 103,
    amount: "$34,295",
    status: "Rejected",
  },
  {
    id: 9,
    name: "iPad Pro (2022)",
    location: "6095 Marjolaine Landing",
    date: "April",
    piece: 903,
    amount: "$29,250",
    status: "Delivered",
  },
  {
    id: 10,
    name: "Iphone 15 (2023)",
    location: "6096 Marjolaine Landing",
    date: "March",
    piece: 401,
    amount: "$33,295",
    status: "Delivered",
  },
];

export const MONTHS = ["All", "March", "April", "May", "June", "July"];

export const PRODUCT_BANNER = [
  {
    id: 1,
    date: "November 13 - 18",
    title: "Apple Watch Series 9",
    description: "Stay connected, track you fitness, and monitor your health.",
  },
  {
    id: 2,
    date: "September 19 - 22",
    title: "Iphone 15 Pro",
    description:
      "Experience unmatched performance with the A17 Pro clip and sleek titanium design.",
  },
  {
    id: 3,
    date: "March 9 - 13",
    title: "AirPods Pro 2",
    description:
      "Immerse yourself in rich sound and powerful noise cancellation.",
  },
];

// Data/products.js
export const APPLE_PRODUCTS = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    price: "$999",
    rating: 4.8,
    reviews: 120,
    images: [iphone_card, iphone_card, iphone_card],
  },
  {
    id: 2,
    title: "iPad Air",
    price: "$599",
    rating: 4.1,
    reviews: 85,
    images: [iphone_card, iphone_card, iphone_card],
  },
  {
    id: 3,
    title: 'MacBook Pro 14"',
    price: "$1999",
    rating: 4.9,
    reviews: 200,
    images: [iphone_card, iphone_card, iphone_card],
  },
  {
    id: 4,
    title: "Apple Watch Series 9",
    price: "$399",
    rating: 4.7,
    reviews: 150,
    images: [iphone_card, iphone_card, iphone_card],
  },
  {
    id: 5,
    title: "AirPods Pro 2",
    price: "$249",
    rating: 3.2,
    reviews: 90,
    images: [iphone_card, iphone_card, iphone_card],
  },
  {
    id: 6,
    title: "HomePod Mini",
    price: "$99",
    rating: 4.4,
    reviews: 60,
    images: [iphone_card, iphone_card, iphone_card],
  },
];

export const PRICING_DATA = [
  {
    id: 1,
    title: "Basic",
    price: "$14.99",
    categories: [
      { name: "Free Setup", available: true },
      { name: "Bandwidth Limit 10 GB", available: true },
      { name: "20 User Connection", available: true },
      { name: "Analytics Report", available: false },
      { name: "Public API Access", available: false },
      { name: "Plugins Intregation", available: false },
      { name: "Custom Content Management", available: false },
    ],
  },
  {
    id: 1,
    title: "Standard",
    price: "$49.99",
    categories: [
      { name: "Free Setup", available: true },
      { name: "Bandwidth Limit 10 GB", available: true },
      { name: "20 User Connection", available: true },
      { name: "Analytics Report", available: true },
      { name: "Public API Access", available: true },
      { name: "Plugins Intregation", available: false },
      { name: "Custom Content Management", available: false },
    ],
  },
  {
    id: 1,
    title: "Premium",
    price: "$89.99",
    categories: [
      { name: "Free Setup", available: true },
      { name: "Bandwidth Limit 10 GB", available: true },
      { name: "20 User Connection", available: true },
      { name: "Analytics Report", available: true },
      { name: "Public API Access", available: true },
      { name: "Plugins Intregation", available: true },
      { name: "Custom Content Management", available: true },
    ],
  },
];
