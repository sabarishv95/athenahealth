import { MEDICAL_BILLING_MASTER } from "../../../../../constants";

/**
 * 
 * @param {String} medicalBilling 
 * @returns medical billing {Object}
 */
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

/**
 * 
 * @param {String} medicalBilling 
 * @param {Number} discount 
 * @returns if the provided disscount is valid or not
 */
export function validateDiscount(medicalBilling, discount) {
  const billing = getMedicalBilling(medicalBilling);
  return discount <= billing.maxDiscount.amount;
}
