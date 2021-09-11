import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { Wrapper } from "./DatePicker.styles";

function DatePicker({ id, onChange, value }) {
  return (
    <Wrapper>
      <Datetime
        className="date-wrapper"
        timeFormat={false}
        dateFormat="DD-MM-YYYY"
        renderInput={(props) => {
          return <input id={id} className="form-control" {...props} value={value ? value : ""} />;
        }}
        value={value ? value : ""}
        onChange={onChange}
        closeOnSelect
      />
    </Wrapper>
  );
}

export default React.memo(DatePicker);
