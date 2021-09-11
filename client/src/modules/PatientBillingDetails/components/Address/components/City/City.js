import React from "react";
import Input from "../../../../../../commons/components/form/Input";

function City() {
  return <Input id="city" type="text" placeholder="City" width="322" height="34" />;
}

export default React.memo(City);
