import React, { useCallback, useRef } from "react";
import DatePicker from "../../../../../../commons/components/form/DatePicker";
import Label from "../../../../../../commons/components/form/Label";
import moment from "moment";

function ToDate({ state, updateState }) {
  const ref = useRef("toDate");

  const onToDateChange = useCallback(
    (value) => {
      const isMoment = moment.isMoment(value);
      const date = isMoment ? moment(value).format("MM-DD-YYYY") : "";
      updateState((prevState) => {
        return {
          ...prevState,
          toDate: date,
        };
      });
      if (!isMoment) ref.current._closeCalendar();
    },
    [updateState]
  );
  return (
    <>
      <Label id="ToDate" text="To Date" width="60" />
      <DatePicker id="ToDate" onChange={onToDateChange} value={state.toDate} reference={ref} />
    </>
  );
}

export default React.memo(ToDate);
