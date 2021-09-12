import React, { useCallback } from "react";
import Select from "react-select";
import Label from "../../../../../../commons/components/form/Label";
import { STATUS } from "../../../../constants";
import { Wrapper } from "./PaymentStatus.styles";

function PaymentStatus({ state, updateState }) {
  const onStatusChange = useCallback(
    (e) => {
      updateState((prevState) => {
        return {
          ...prevState,
          status: e.label,
        };
      });
    },
    [updateState]
  );

  return (
    <Wrapper>
      <Label id="paymentStatus" text="Status" />
      <Select
        id="paymentStatus"
        className="payment-status"
        placeholder="Fully Paid"
        options={STATUS}
        inputId="paymentStatus"
        name="paymentStatus"
        getOptionLabel={(option) => `${option.label}`}
        getOptionValue={(option) => `${option.id}`}
        value={state.status ? STATUS.find((obj) => obj.label === state.status) : ""}
        onChange={onStatusChange}
        isSearchable={false}
      />
    </Wrapper>
  );
}

export default React.memo(PaymentStatus);
