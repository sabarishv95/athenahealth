import React from "react";
import Input from "../../../../../../commons/components/form/Input/Input";
import { Wrapper } from "./StreetAddress.styles";

function StreetAddress() {
  return (
    <Wrapper>
      <Input
        id="streetAddress"
        className="street-address"
        type="text"
        height="34"
        placeholder="Street Address"
      />
      <Input
        id="streetAddress1"
        className="street-address"
        type="text"
        height="34"
        placeholder="Street Address 1"
      />
    </Wrapper>
  );
}

export default React.memo(StreetAddress);
