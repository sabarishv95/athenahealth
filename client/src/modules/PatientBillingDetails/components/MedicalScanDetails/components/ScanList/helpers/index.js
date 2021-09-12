import { MEDICAL_BILLING_MASTER } from "../../../../../constants";

export function getMedicalBilling(medicalBilling) {
  return MEDICAL_BILLING_MASTER.find((obj) => obj.medicalBilling === medicalBilling);
}
/**
 *
 * @param {Strig} medicalBilling
 * @returns scan amount of the selected medicalBilling
 */
export function getAmount(medicalBilling) {
  const billing = getMedicalBilling(medicalBilling);
  return billing ? billing.scanAmount : null;
}

export function validateDiscount(medicalBilling, discount) {
  const billing = getMedicalBilling(medicalBilling);
  return discount <= billing.maxDiscount.amount;
}
