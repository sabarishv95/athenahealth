import React from "react";

function ScanAmount({ amount }) {
  return (
    <p>
      ScanAmount: <span className="scan-amount">{amount}</span>
    </p>
  );
}

export default React.memo(ScanAmount);
