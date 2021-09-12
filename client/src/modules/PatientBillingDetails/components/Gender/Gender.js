import React, { useCallback, useContext } from "react";
import Input from "../../../../commons/components/form/Input";
import Label from "../../../../commons/components/form/Label";
import { Wrapper } from "./Gender.styles";
import PaymentDetailsContext from "../../context";
import { SALUTATIONS } from "../../constants";

function Gender() {
  const { paymentDetails, updatePaymentBillingDetailsKey } = useContext(PaymentDetailsContext);

  const onGenderChange = useCallback(
    (e) => {
      const mister = SALUTATIONS.find((obj) => obj.name === "mister");
      const miss = SALUTATIONS.find((obj) => obj.name === "miss");
      updatePaymentBillingDetailsKey(e.target.name, e.target.id);
      updatePaymentBillingDetailsKey(
        "salutation",
        e.target.id === "Female" ? miss.label : mister.label
      );
    },
    [updatePaymentBillingDetailsKey]
  );

  return (
    <Wrapper>
      <Input
        type="radio"
        id="Male"
        height="16"
        width="24"
        name="gender"
        checked={paymentDetails.gender === "Male"}
        value={paymentDetails.gender}
        onChange={onGenderChange}
      />
      <Label id="Male" text="Male" />
      <Input
        type="radio"
        id="Female"
        height="16"
        width="24"
        name="gender"
        checked={paymentDetails.gender === "Female"}
        value={paymentDetails.gender}
        onChange={onGenderChange}
      />
      <Label id="Female" text="Female" />
    </Wrapper>
  );
}

export default React.memo(Gender);
