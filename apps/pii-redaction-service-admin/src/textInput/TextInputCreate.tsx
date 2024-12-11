import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TextInputCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Create>
  );
};
