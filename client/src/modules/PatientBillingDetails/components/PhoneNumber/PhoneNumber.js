import React from "react";
import Input from "../../../../commons/components/form/Input/Input";
import Label from "../../../../commons/components/form/Label";

function PhoneNumber() {
  return (
    <>
      <Input id="phNo" type="number" width="200" height="34" />
    </>
  );
}

export default React.memo(PhoneNumber);
