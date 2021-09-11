import React from "react";
import Select from "react-select";

function Country() {
  return <Select className="country" placeholder="Select Country" />;
}

export default React.memo(Country);
