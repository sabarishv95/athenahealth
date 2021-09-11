import React from "react";
import Input from "../../../../commons/components/form/Input";

function PhoneNumber() {
  return <Input id="phNo" type="number" width="200" height="34" />;
}

export default React.memo(PhoneNumber);
