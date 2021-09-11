import React from "react";
import Select from "react-select";

function SearchBilling() {
  return <Select className="search-billing" placeholder="Auto Complete Search" />;
}

export default React.memo(SearchBilling);
