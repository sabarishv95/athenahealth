import React, { useCallback } from "react";
import Button from "../../../../../../../../commons/components/form/Button";
import Input from "../../../../../../../../commons/components/form/Input";
import Label from "../../../../../../../../commons/components/form/Label";
import { StyledWrapper } from "./AddDiscount.styles";

function AddDiscount({ discount, onStateChange }) {
  const onDiscountChange = useCallback(
    (e) => {
      onStateChange(e.target.value);
    },
    [onStateChange]
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
      <Button className="addBtn" label="Add" height="38" width="80" />
    </StyledWrapper>
  );
}

export default React.memo(AddDiscount);
