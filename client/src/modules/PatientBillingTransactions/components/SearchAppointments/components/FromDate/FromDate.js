import React from "react";
import DatePicker from "../../../../../../commons/components/form/DatePicker";
import Label from "../../../../../../commons/components/form/Label";

function FromDate() {
  return (
    <>
      <Label id="fromDate" text="From Date" width="80" />
      <DatePicker id="fromDate" />
    </>
  );
}

export default React.memo(FromDate);
