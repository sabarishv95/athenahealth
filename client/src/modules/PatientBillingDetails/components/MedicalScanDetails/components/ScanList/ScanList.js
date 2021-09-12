import React, { useState, useCallback, useContext } from "react";
import AddDiscount from "./components/AddDiscount";
import ScanAmount from "./components/ScanAmount";
import SearchBilling from "./components/SearchBilling";
import { getAmount, validateDiscount, getMedicalBilling } from "./helpers";
import { StyledWrapper } from "./ScanList.styles";
import Button from "../../../../../../commons/components/form/Button";
import PaymentDetailsContext from "../../../../context";

function ScanList() {
  const { paymentDetails, updatePaymentBillingDetailsKey } = useContext(PaymentDetailsContext);

  const [medicalBilling, updateMedicalBilling] = useState("");
  const [discount, updateDiscount] = useState(null);
  const [isValid, updateIsValid] = useState(null);

  const amount = getAmount(medicalBilling);

  const onAddClick = useCallback(() => {
    const valid = validateDiscount(medicalBilling, Number(discount));
    if (valid) {
      const medicalScanDetails = paymentDetails.medicalScanDetails;
      const billing = getMedicalBilling(medicalBilling);
      medicalScanDetails.push({
        Sno: medicalScanDetails.length + 1,
        scanName: medicalBilling,
        scanAmount: billing.scanAmount,
        discount: Number(discount),
        totalAmount: billing.scanAmount - Number(discount),
      });
      updatePaymentBillingDetailsKey("medicalScanDetails", medicalScanDetails);
      updateMedicalBilling("")
    }
    updateIsValid(valid);
  }, [updateIsValid, discount, medicalBilling, updatePaymentBillingDetailsKey, paymentDetails.medicalScanDetails]);

  return (
    <StyledWrapper>
      <SearchBilling
        medicalBilling={medicalBilling}
        onStateChange={updateMedicalBilling}
        updateIsValid={updateIsValid}
      />
      <ScanAmount amount={amount} />
      <AddDiscount
        discount={discount}
        onStateChange={updateDiscount}
        updateIsValid={updateIsValid}
      />
      <Button
        className={`${!medicalBilling ? "disabled" : ""} addBtn`}
        label="Add"
        height="38"
        width="80"
        onClick={onAddClick}
        disabled={!medicalBilling}
      />
      {isValid === false && <p className="error-msg">Discount Exceeds max discount</p>}
    </StyledWrapper>
  );
}

export default React.memo(ScanList);
