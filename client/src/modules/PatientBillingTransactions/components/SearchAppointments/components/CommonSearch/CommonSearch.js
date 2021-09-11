import React from "react";
import Button from "../../../../../../commons/components/form/Button";
import Input from "../../../../../../commons/components/form/Input";
import Label from "../../../../../../commons/components/form/Label";

function CommonSearch() {
  return (
    <div>
      <Label id="commonSearch" text="Common Search" width="80" />
      <Input id="commonSearch" type="text" width="150" height="28" />
      <Button className="searchBtn" label="Search" height="32" width="80" />
    </div>
  );
}

export default React.memo(CommonSearch);
