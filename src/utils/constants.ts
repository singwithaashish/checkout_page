export const pageTexts = {
  city: "Bangalore",
  paySection: {
    detailsFields: [
      { id: "name", label: "Full Name", type: "text" },
      { id: "phone", label: "Phone Number", type: "number" },
      { id: "email", label: "Email", type: "email" },
      { id: "confirmEmail", label: "Confirm Email", type: "email" },
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
};
