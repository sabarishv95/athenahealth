import React from "react";
import DatePicker from "../../../../../../commons/components/form/DatePicker";
import Label from "../../../../../../commons/components/form/Label";

function ToDate() {
  return (
    <>
      <Label id="ToDate" text="To Date" width="60" />
      <DatePicker id="ToDate" />
    </>
  );
}

export default React.memo(ToDate);
