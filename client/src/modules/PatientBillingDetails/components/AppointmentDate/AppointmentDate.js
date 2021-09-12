import moment from "moment";
import React, { useContext, useCallback, useRef } from "react";
import DatePicker from "../../../../commons/components/form/DatePicker";
import PaymentDetailsContext from "../../context";
import Api from "../../../../API";

function AppointmentDate() {
  const { paymentDetails, updatePaymentBillingDetailsKey, setCurrentAppointments } =
    useContext(PaymentDetailsContext);
  const ref = useRef("AppointmentDate");
  const onAppointmentDateChange = useCallback(
    (value) => {
      const isMoment = moment.isMoment(value);
      const date = isMoment ? moment(value).format("MM-DD-YYYY") : "";
      updatePaymentBillingDetailsKey("appointmentDate", date);
      if (!isMoment) {
        ref.current._closeCalendar();
        setCurrentAppointments();
      } else {
        const api = new Api();
        const query = `query searchAppointments($fromDate:Date, $toDate:Date, $status:String, $patientName: String) {
          searchAppointments(fromDate:$fromDate, toDate: $toDate, status: $status, patientName: $patientName) {
            _id
            patientName
            gender
            age
            appointmentDate
            status
            medicalScanDetails {
              scanName
              scanAmount
              discount
              totalAmount
            }
            transactions{
              _id
              date
              paidAmount
              paymentMode
            }
          }
        }`;
        api
          .graphqlRequest(query, { fromDate: date, toDate: date })
          .then((response) => {
            setCurrentAppointments(response.data.data.searchAppointments);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    [updatePaymentBillingDetailsKey, setCurrentAppointments]
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
