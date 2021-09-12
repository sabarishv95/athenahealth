import React, { useCallback, useRef } from "react";
import DatePicker from "../../../../../../commons/components/form/DatePicker";
import Label from "../../../../../../commons/components/form/Label";
import moment from "moment";

function FromDate({ state, updateState }) {
  const ref = useRef("fromDate");

  const onFromDateChange = useCallback(
    (value) => {
      const isMoment = moment.isMoment(value);
      const date = isMoment ? moment(value).format("MM-DD-YYYY") : "";
      updateState((prevState) => {
        return {
          ...prevState,
          fromDate: date,
        };
      });
      if (!isMoment) ref.current._closeCalendar();
    },
    [updateState]
  );

  return (
    <>
      <Label id="fromDate" text="From Date" width="80" />
      <DatePicker
        id="fromDate"
        onChange={onFromDateChange}
        value={state.fromDate}
        reference={ref}
      />
    </>
  );
}

export default React.memo(FromDate);
