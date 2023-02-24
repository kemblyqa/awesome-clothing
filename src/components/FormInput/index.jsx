import React from "react";
import { FormInputLabel, Group, Input } from "./styles";

export const FormInput = ({ label, ...props }) => {
  return (
    <Group>
      <Input {...props} />
      {label && (
        <FormInputLabel shrink={props.value.length}>{label}</FormInputLabel>
      )}
    </Group>
  );
};
