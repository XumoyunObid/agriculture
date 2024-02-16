import stars from "../assets/Icons/RatingStars";
import policy from "../assets/Icons/ReturnPolicyIcon";
import fresh from "../assets/Icons/FreshIcon";
import support from "../assets/Icons/SupportIcon";
import payment from "../assets/Icons/PaymentIcon";
//////////////////////////////////////////////////

import broccoli from "../assets/DataImgs/broccoli.png";
import banana from "../assets/DataImgs/banana.png";
import whitenuts from "../assets/DataImgs/whitenuts.png";
import tomato from "../assets/DataImgs/tomato1.png";
import mungbean from "../assets/DataImgs/mungbean.png";
import hazelnuts from "../assets/DataImgs/hazelnuts.png";
import eggs from "../assets/DataImgs/eggs.png";
import elaichirusk from "../assets/DataImgs/elaichirusk.png";
import caulifflower from "../assets/DataImgs/cauliflower.png";
import pumpkin2 from "../assets/DataImgs/pumpkin2.png";
import pumpkin from "../assets/DataImgs/pumpkin.png";
import onion from "../assets/DataImgs/onion.png";
import cabbage from "../assets/DataImgs/cabbage.png";
import whitehazel from "../assets/DataImgs/whitehazelnuts.png";
import corn from "../assets/DataImgs/freshcorn.png";
import almonds from "../assets/DataImgs/almonds.png";
import spices from "../assets/DataImgs/spices.jpg";
import feesds from "../assets/DataImgs/feesds.jpg";
import pomegranate from "../assets/DataImgs/pomegranate.jpg";
import ginger from "../assets/DataImgs/ginger.jpg";
import InstaIcon from "./../assets/Icons/InstaIcon";
import FaceBookIcon from "./../assets/Icons/FaceBookIcon";
import Twitter from "./../assets/Icons/Twitter";
//////////////////////////////////////////////////////////

import giovanni from "../assets/DataImgs/giovanni.png";
import marianne from "../assets/DataImgs/marianne.png";
import riga from "../assets/DataImgs/riga.png";

export const products = [
  {
    id: 1,
    title: "Calabrese Broccoli",
    status: "Vegetable",
    img: broccoli,
    price: "13.00",
    rating: stars,
    discount: "20.00",
  },
  {
    id: 2,
    title: "Fresh Banana Fruites",
    status: "Fresh",
    img: banana,
    price: "14.00",
    rating: stars,
    discount: "20.00",
  },
  {
    id: 3,
    title: "White Nuts",
    status: "Millets",
    img: whitenuts,
    price: "15.00",
    rating: stars,
    discount: "20.00",
  },
  {
    id: 4,
    title: "Vegan Red Tomato",
    status: "Vegetable",
    img: tomato,
    price: "17.00",
    rating: stars,
    discount: "20.00",
  },
  {
    id: 5,
    title: "Mung Bean",
    status: "Health",
    img: mungbean,
    price: "11.00",
    rating: stars,
    discount: "20.00",
  },
  {
    id: 6,
    title: "Brown Hazelnut",
    status: "Nuts",
    img: hazelnuts,
    price: "12.00",
    rating: stars,
    discount: "20.00",
  },
  {
    id: 7,
    title: "Eggs",
    status: "Fresh",
    img: eggs,
    price: "17.00",
    rating: stars,
    discount: "20.00",
  },
  {
    id: 8,
    title: "Zelco Suji Elaichi Rusk",
    status: "Fresh",
    img: elaichirusk,
    price: "15.00",
    rating: stars,
    discount: "20.00",
  },
  {
    id: 9,
    title: "Pumpkin",
    status: "Health",
    img: pumpkin,
    price: "11.00",
    rating: stars,
    discount: "20.00",
  },
  {
    id: 10,
    title: "White hazelnuts",
    status: "Nuts",
    img: whitehazel,
    price: "12.00",
    rating: stars,
    discount: "20.00",
  },
  {
    id: 11,
    title: "Fresh Corn",
    status: "Fresh",
    img: corn,
    price: "17.00",
    rating: stars,
    discount: "20.00",
  },
  {
    id: 12,
    title: "Organic Almonds",
    status: "Fresh",
    img: almonds,
    price: "15.00",
    rating: stars,
    discount: "20.00",
  },
  {
    id: 13,
    title: "Caulif Flower",
    status: "Vegetable",
    img: caulifflower,
    price: "11.00",
    rating: stars,
    discount: "20.00",
  },
  {
    id: 14,
    title: "Pumpkin",
    status: "Vegetable",
    img: pumpkin2,
    price: "12.00",
    rating: stars,
    discount: "20.00",
  },
  {
    id: 15,
    title: "Onion",
    status: "Vegetable",
    img: onion,
    price: "17.00",
    rating: stars,
    discount: "20.00",
  },
  {
    id: 16,
    title: "Cabbage",
    status: "Vegetable",
    img: cabbage,
    price: "17.00",
    rating: stars,
    discount: "20.00",
  },
];

export const testimonials = [
  {
    id: 1,
    title: "100%",
    text: "Organic",
  },
  {
    id: 2,
    title: "285",
    text: "Active Products",
  },
  {
    id: 3,
    title: "350+",
    text: "Organic Orchads",
  },
  {
    id: 4,
    title: "25+",
    text: "Years of Farming",
  },
];

export const service = [
  {
    id: 1,
    title: "Return Policy",
    text: "Simply dummy text of the printintypesetting industry.",
    img: policy,
  },
  {
    id: 2,
    title: "100% Fresh",
    text: "Simply dummy text of the printintypesetting industry.",
    img: fresh,
  },
  {
    id: 3,
    title: "Support 24/7",
    text: "Simply dummy text of the printintypesetting industry.",
    img: support,
  },
  {
    id: 4,
    title: "Secured Payment",
    text: "Simply dummy text of the printintypesetting industry.",
    img: payment,
  },
];

export const team = [
  {
    id: 1,
    img: giovanni,
    name: "Giovanni Bacardo",
    job: "Farmer",
    insta: InstaIcon,
    facebook: FaceBookIcon,
    twitter: Twitter,
  },
  {
    id: 2,
    img: marianne,
    name: "Marianne Loreno",
    job: "Designer",
    insta: InstaIcon,
    facebook: FaceBookIcon,
    twitter: Twitter,
  },
  {
    id: 3,
    img: riga,
    name: "Riga Pelore",
    job: "Farmer",
    insta: InstaIcon,
    facebook: FaceBookIcon,
    twitter: Twitter,
  },
];

export const about_category = [
  {
    id: 1,
    title: "Spicy",
    img: spices,
  },
  {
    id: 2,
    title: "Nuts & Feesd",
    img: feesds,
  },
  {
    id: 3,
    title: "Fruits",
    img: pomegranate,
  },
  {
    id: 4,
    title: "Vegetable",
    img: ginger,
  },
];
