import { FcGlobe, FcManager, FcMoneyTransfer } from "react-icons/fc";


export const navContent = [
    {
      id: 1,
      name: "Products",
      url: "/",
    },
    {
      id: 2,
      name: "Pricing",
      url: "/#features",
    },
    {
      id: 3,
      name: "Support",
      url: "/#about",
    },
    {
      id: 4,
      name: "Documentation",
      url: "/#contact-us",
    },
    {
        id: 5,
        name: "Login",
        url: "/#login",
      },
      {
        id: 4,
        name: "Create Account",
        url: "/#create-account",
      },
  ];

export const featureItems = [
  {
    id: 1,
    feature: "Quick setup.",
    about: "Begin accepting payments in 15 minutes. ",
  },
  {
    id: 2,
    feature: "Honest pricing.",
    about: "Only pay for successful transactions.",
  },
  {
    id: 3,
    feature: "All leading payment methods.",
    about: "The best localised experience.",
  },
];

export const solutionItems = [
  {
    id: 1,
    solution: "Debit and Credit Cards",
  },
  {
    id: 2,
    solution: "USSD",
  },
  {
    id: 3,
    solution: "Bank Account",
  },
  {
    id: 4,
    solution: "Soft POS",
  },
  {
    id: 5,
    solution: "Bank Transfer",
  },
  {
    id: 6,
    solution: "Mobile Money",
  },
];


export const supportItems = [
    {
      id: 1,
      icon: <FcGlobe />,
      feature: "Scuad for Global Brands",
      about: "We help global brands accept payments from across Africa.",
    },
    {
      id: 2,
      icon: <FcManager />,
      feature: "Scuad for Entrepreneurs",
      about: "From startup to scale-up, we can support you at every stage of your businesses' growth.",
    },
    {
      id: 3,
      icon: <FcMoneyTransfer />,
      feature: "Scuad for Large Organizations",
      about: "Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely.",
    },
  ];