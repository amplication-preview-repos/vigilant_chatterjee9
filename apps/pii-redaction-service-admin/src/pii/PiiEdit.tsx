import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { RedactedTextTitle } from "../redactedText/RedactedTextTitle";

export const PiiEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="confidence" source="confidence" />
        <ReferenceInput
          source="redactedText.id"
          reference="RedactedText"
          label="redactedText"
        >
          <SelectInput optionText={RedactedTextTitle} />
        </ReferenceInput>
        <TextInput label="type" source="typeField" />
        <TextInput label="value" multiline source="value" />
      </SimpleForm>
    </Edit>
  );
};
