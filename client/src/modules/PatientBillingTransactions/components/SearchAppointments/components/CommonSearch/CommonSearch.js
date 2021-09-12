import React, { useCallback } from "react";
import Button from "../../../../../../commons/components/form/Button";
import Input from "../../../../../../commons/components/form/Input";
import Label from "../../../../../../commons/components/form/Label";

function CommonSearch({ state, updateState }) {
  const onChange = useCallback(
    (e) => {
      updateState((prevState) => {
        return {
          ...prevState,
          patientName: e.target.value,
        };
      });
    },
    [updateState]
  );

  return (
    <div>
      <Label id="commonSearch" text="Common Search" width="80" />
      <Input
        id="commonSearch"
        type="text"
        width="150"
        height="34"
        onChange={onChange}
        value={state.patientName || ""}
      />
      <Button className="searchBtn" label="Search" height="38" width="80" />
    </div>
  );
}

export default React.memo(CommonSearch);
