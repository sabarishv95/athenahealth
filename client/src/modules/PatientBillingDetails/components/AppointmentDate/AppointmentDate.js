import moment from "moment";
import React, { useContext, useCallback, useRef } from "react";
import DatePicker from "../../../../commons/components/form/DatePicker";
import PaymentDetailsContext from "../../context";

function AppointmentDate() {
  const { paymentDetails, updatePaymentBillingDetailsKey } = useContext(PaymentDetailsContext);
  const ref = useRef("AppointmentDate");
  const onAppointmentDateChange = useCallback(
    (value) => {
      const isMoment = moment.isMoment(value);
      const date = isMoment ? moment(value).format("DD-MM-YYYY") : "";
      updatePaymentBillingDetailsKey("appointmentDate", date);
      if (!isMoment) ref.current._closeCalendar();
    },
    [updatePaymentBillingDetailsKey]
  );

  return (
    <DatePicker
      id="appointmentDate"
      onChange={onAppointmentDateChange}
      value={paymentDetails.appointmentDate}
      reference={ref}
    />
  );
}

export default React.memo(AppointmentDate);
