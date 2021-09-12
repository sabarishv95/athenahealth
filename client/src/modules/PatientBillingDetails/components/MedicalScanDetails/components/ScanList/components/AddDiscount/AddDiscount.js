import React, { useCallback } from "react";
import Input from "../../../../../../../../commons/components/form/Input";
import Label from "../../../../../../../../commons/components/form/Label";
import { StyledWrapper } from "./AddDiscount.styles";

function AddDiscount({ discount, onStateChange, updateIsValid, updateIsSlotAvailable }) {
  const onDiscountChange = useCallback(
    (e) => {
      onStateChange(e.target.value);
      updateIsValid(null);
      updateIsSlotAvailable(null);
    },
    [onStateChange, updateIsValid, updateIsSlotAvailable]
  );

  return (
    <StyledWrapper>
      <Label id="addDiscount" text="Discount" />
      <Input
        id="addDiscount"
        type="number"
        width="100"
        height="34"
        onChange={onDiscountChange}
        value={discount || ""}
      />
    </StyledWrapper>
  );
}

export default React.memo(AddDiscount);
