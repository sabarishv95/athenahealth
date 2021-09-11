import React from "react";
import Button from "../../../../../../../../commons/components/form/Button";
import Input from "../../../../../../../../commons/components/form/Input/Input";
import Label from "../../../../../../../../commons/components/form/Label";
import { StyledWrapper } from "./AddDiscount.styles";

function AddDiscount() {
  return (
    <StyledWrapper>
      <Label id="addDiscount" text="Discount" />
      <Input id="addDiscount" type="number" width="100" height="34" />
      <Button className="addBtn" label="Add" height="38" width="80" />
    </StyledWrapper>
  );
}

export default React.memo(AddDiscount);
