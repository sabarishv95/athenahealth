import React from "react";
import Input from "../../../../../../commons/components/form/Input";

function Zipcode() {
  return <Input id="zipcode" type="text" placeholder="Zip / Postal Code" width="322" height="34" />;
}

export default React.memo(Zipcode);
