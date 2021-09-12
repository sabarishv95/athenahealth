import moment from "moment";
import React, { useContext, useCallback, useRef } from "react";
import DatePicker from "../../../../commons/components/form/DatePicker";
import PaymentDetailsContext from "../../context";

function DOB() {
  const { paymentDetails, updatePaymentBillingDetailsKey } = useContext(PaymentDetailsContext);
  const ref = useRef("DOB");
  const onDOBChange = useCallback(
    (value) => {
      const isMoment = moment.isMoment(value);
      const diff = moment().diff(value, "years");
      const date = isMoment ? moment(value).format("DD-MM-YYYY") : "";
      updatePaymentBillingDetailsKey("dob", date);
      updatePaymentBillingDetailsKey("ageType", isMoment ? "years" : "");
      updatePaymentBillingDetailsKey("age", isMoment ? diff : "");
      if (!isMoment) ref.current._closeCalendar();
    },
    [updatePaymentBillingDetailsKey]
  );

  return <DatePicker id="DOB" onChange={onDOBChange} value={paymentDetails.dob} reference={ref} />;
}

export default React.memo(DOB);
