import React, { useState, useCallback, useContext } from "react";
import AddDiscount from "./components/AddDiscount";
import ScanAmount from "./components/ScanAmount";
import SearchBilling from "./components/SearchBilling";
import { getAmount, validateDiscount, getMedicalBilling } from "./helpers";
import { StyledWrapper } from "./ScanList.styles";
import Button from "../../../../../../commons/components/form/Button";
import PaymentDetailsContext from "../../../../context";
import { MODALITY_SLOT_DETAILS } from "../../../../constants";

function ScanList() {
  const { paymentDetails, currentAppointments, updatePaymentBillingDetailsKey } =
    useContext(PaymentDetailsContext);

  const [medicalBilling, updateMedicalBilling] = useState("");
  const [discount, updateDiscount] = useState(null);
  const [isValid, updateIsValid] = useState(null);
  const [isSlotAvailable, updateIsSlotAvailable] = useState(null);

  const amount = getAmount(medicalBilling);

  const onAddClick = useCallback(() => {
    const valid = validateDiscount(medicalBilling, Number(discount));
    const billing = getMedicalBilling(medicalBilling);
    const modality = MODALITY_SLOT_DETAILS.find((obj) => obj.id === billing.modalityId);
    const takenSlots = currentAppointments.filter((obj) =>
      obj.medicalScanDetails.some((scan) => scan.scanName === medicalBilling)
    );
    const isSlotAvailable = takenSlots.length < modality.slots;
    if (valid && isSlotAvailable) {
      const medicalScanDetails = [...paymentDetails.medicalScanDetails];
      medicalScanDetails.push({
        Sno: medicalScanDetails.length + 1,
        scanName: medicalBilling,
        scanAmount: billing.scanAmount,
        discount: Number(discount),
        totalAmount: billing.scanAmount - Number(discount),
      });
      updatePaymentBillingDetailsKey("medicalScanDetails", medicalScanDetails);
      updateMedicalBilling("");
    }
    updateIsSlotAvailable(isSlotAvailable);
    updateIsValid(valid);
  }, [
    updateIsValid,
    discount,
    medicalBilling,
    updatePaymentBillingDetailsKey,
    paymentDetails.medicalScanDetails,
    updateIsSlotAvailable,
    currentAppointments,
  ]);

  return (
    <StyledWrapper>
      <SearchBilling
        medicalBilling={medicalBilling}
        onStateChange={updateMedicalBilling}
        updateIsValid={updateIsValid}
        updateIsSlotAvailable={updateIsSlotAvailable}
      />
      <ScanAmount amount={amount} />
      <AddDiscount
        discount={discount}
        onStateChange={updateDiscount}
        updateIsValid={updateIsValid}
        updateIsSlotAvailable={updateIsSlotAvailable}
      />
      <Button
        className={`${
          !medicalBilling || !paymentDetails.appointmentDate || discount < 0 ? "disabled" : ""
        } addBtn`}
        label="Add"
        height="38"
        width="80"
        onClick={onAddClick}
        disabled={
          !medicalBilling || !paymentDetails.appointmentDate || (discount < 0 && discount !== null)
        }
      />
      {isValid === false && <p className="error-msg">Discount Exceeds max discount</p>}
      {isSlotAvailable === false && <p className="error-msg">No Slots Available</p>}
      {discount < 0 && <p className="error-msg">Discount should be greated than 0</p>}
    </StyledWrapper>
  );
}

export default React.memo(ScanList);
