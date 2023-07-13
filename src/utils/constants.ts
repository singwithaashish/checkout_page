import { allSvgs } from "./SVGs";

export const pageTexts = {
  city: "Bangalore",
  paySection: {
    detailsFields: [
      { 
        id: "name", 
        label: "Full Name", 
        type: "text", 
        validation: (value : string) => /^[a-zA-Z\s]*$/.test(value) && value.trim() !== "" ? "" : "Name must be alphabets" 
      },
      { 
        id: "phone", 
        label: "Phone Number", 
        type: "number", 
        prefixIcon: allSvgs.MasterFlag, 
        validation: (value: string) => /^\d+$/.test(value) && value.length <= 10 ? "" : "Invalid phone number" 
      },
      { 
        id: "email", 
        label: "Email", 
        type: "email", 
        validation: (value: string) => /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(value) && value.trim() !== "" ? "" : "Invalid email format" 
      },
      { 
        id: "confirmEmail", 
        label: "Confirm Email", 
        type: "email", 
        validation: (value: string) => /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(value) && value.trim() !== "" ? "" : "Confirm Email must match Email" 
      },
    ],
    additionalInfo: {
      ageInput: { id: "age", label: "Your Age", type: "number" },
      genderDropdown: {
        id: "gender",
        label: "Gender",
        type: "text",
        options: ["Male", "Female", "Other"],
      },
    },
    modeOfPayment: {
      types: [
        {
          title: "Credit & debit card",
          svg: allSvgs.CreditCard,
          isSelected: true,
        },
        {
          title: "Klarna",
          svg: allSvgs.Klarna,
          isSelected: false,
        },
      ],
      selected: 0,
      inputFields: [
        { id: "cardHolderName", label: "Name on Card", type: "text" },
        { id: "cardNumber", label: "Card Number", type: "number", suffixIcon: allSvgs.Visa },
        { id: "expiryDate", label: "Expiry Date", type: "date" },
        { id: "cvv", label: "CVV/CVC", type: "number" },
      ],
    },
  },
  ticketSection: {
    variant: "travel",
    date: "2022-10-10",
    time: "10:00 AM",
    overview: [
      {
        type: "Adult",
        count: 1,
        price: 100,
      },
      {
        type: "Child",
        count: 2,
        price: 50,
      },
      {
        type: "Fee",
        price: 10,
      },
      {
        type: "Discount",
        price: -20,
      },
    ],
    total: 140,
    currency: "USD",
  },
  faqSection: {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "Are my tickets transferable?",
        answer:
          "No. The tickets can only be used by the person(s) whose details are indicated on the voucher. If you’re booking for friends and family, make sure to key in their details.",
      },
      {
        question: "How long will it take to receive my ticket?",
        answer:
          "The tickets will hit your inbox as soon as you complete making the payment.",
      },
      {
        question: "Is my payment secure?",
        answer:
          "We use a PCI compliant payment gateway that is internationally recognized and protects against fraud and unauthorized transactions. In short, your payment is a 100% secure and you have nothing to worry!",
      },
      {
        question: "What type of payment options do you offer?",
        answer:
          "We accept payments via all major international debit cards, credit cards, Google Pay and Apple Pay. Please note that Tickete being an online marketplace does not accept cash payments.",
      },
      {
        question: "When will I be charged for my booking?",
        answer:
          "Your account will be charged immediately upon booking. If the booking is cancelled from your end or by our local tour operator, we will refund the entire amount to your account at no extra cost.",
      },
      {
        question: "Why am I being charged in USD?",
        answer:
          "All payments on Tickete are charged in USD. Your accounted will be debited with the spot rate for the conversion rate from your local currency to USD. We understand this is less than ideal but, we’re working on accepting payments in currencies across the world.",
      },
      {
        question: "Will I get a complete refund if I cancel this ticket?",
        answer:
          "The cancellation and refund policy varies per ticket. While some can be canceled up to 24, 48, or 72 hours before they start, several others can’t be canceled once the reservation has been confirmed. For the ones that can cancelled within the permissible cancellation period, you will receive a full refund.",
      },
      {
        question:
          "How long does it take for a refund to reflect in my account?",
        answer:
          "Depending on your bank, it typically takes anywhere between 2-7 working days for the refunded amount to reflect in your account.",
      },
    ],
  },
  tiketePromiseSection: {
    title: "The Tickete Promise",
    promises: [
      {
        svg: allSvgs.CircleWavyCheck,
        title: "Official tickets",
        description: "Authorised reseller to top attraction",
      },
      {
        svg: allSvgs.ChatsCircle,
        title: "24/7 dedicated support",
        description: "We're here to help, talk to an expert",
      },
      {
        svg: allSvgs.CalendarBlank,
        title: "Flexible bookings",
        description: "Book stress-free with easy cancellation",
      },
      {
        svg: allSvgs.ShieldCheckered,
        title: "100% secure payments",
        description: "Internationally recognized encrypted payment process",
      },
    ],
  },
  footerSection: {
    title: "Tickete",
    links: [
      {
        title: "© Tickete Inc.",
        url: "/",
      },
      {
        title: "Privacy",
        url: "/privacy",
      },
      {
        title: "Terms",
        url: "/terms",
      },
      {
        title: "Cancellation Policy",
        url: "/cancellation",
      },
    ],
    socialLinks: [
      {
        title: "Facebook",
        url: "https://www.facebook.com/tickete",
        svg: allSvgs.FacebookLogo,
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com/tickete",
        svg: allSvgs.InstagramLogo,
      },
      {
        title: "Twitter",
        url: "https://www.twitter.com/tickete",
        svg: allSvgs.TwitterLogo,
      },
    ],
  },
};
