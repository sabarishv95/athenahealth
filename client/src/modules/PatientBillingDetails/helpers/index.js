import { cloneDeep } from "lodash";

export function validateForm(formData) {
  const clonedData = cloneDeep(formData);
  const { address, medicalScanDetails } = formData;
  clonedData.address = "";
  clonedData.medicalScanDetails = "";
  return (
    Object.values(clonedData).filter((value) => !value).length === 2 &&
    !Object.values(address).some((value) => !value) &&
    !!medicalScanDetails.length
  );
}
