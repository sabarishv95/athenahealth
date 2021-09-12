import { MEDICAL_BILLING_MASTER } from "../../../../../constants";

/**
 *
 * @param {Strig} medicalBilling
 * @returns scan amount of the selected medicalBilling
 */
export function getAmount(medicalBilling) {
  const billing = MEDICAL_BILLING_MASTER.find((obj) => obj.medicalBilling === medicalBilling);
  return billing ? billing.scanAmount : null;
}
