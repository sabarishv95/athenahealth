export const SALUTATIONS = [
  {
    id: 1,
    label: "Mr.",
    name: "mister",
  },
  {
    id: 2,
    label: "Ms.",
    name: "miss",
  },
  {
    id: 3,
    label: "Mrs.",
    name: "missus",
  },
];

export const AGE_TYPE = [
  {
    id: 1,
    label: "Years",
    name: "years",
  },
  {
    id: 2,
    label: "Months",
    name: "months",
  },
  {
    id: 3,
    label: "Days",
    name: "days",
  },
];

export const COUNTRY = [
  {
    id: 1,
    label: "India",
    name: "india",
  },
  {
    id: 2,
    label: "USA",
    name: "usa",
  },
];

//Ideally, the below data should be stored in the DB with separate models / collections. But storing it here due to time constraints.

export const MEDICAL_BILLING_MASTER = [
  {
    id: 1,
    medicalBilling: "CT BRAIN",
    maxDiscount: {
      amount: 100,
      currency: "INR",
      percent: false,
    },
    scanAmount: 800,
    modalityId: 1,
  },
  {
    id: 2,
    medicalBilling: "MRI BRAIN",
    maxDiscount: {
      amount: 300,
      currency: "INR",
      percent: false,
    },
    scanAmount: 1600,
    modalityId: 2,
  },
  {
    id: 3,
    medicalBilling: "GLUCOSE FASTING",
    maxDiscount: {
      amount: 10,
      currency: null,
      percent: true,
    },
    scanAmount: 250,
    modalityId: 3,
  },
];

export const MODALITY_SLOT_DETAILS = [
  {
    id: 1,
    slots: 7,
  },
  {
    id: 2,
    slots: 6,
  },
  {
    id: 3,
    slots: Infinity,
  },
];
