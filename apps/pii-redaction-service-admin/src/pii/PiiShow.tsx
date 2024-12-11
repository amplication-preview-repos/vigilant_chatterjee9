import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { REDACTEDTEXT_TITLE_FIELD } from "../redactedText/RedactedTextTitle";

export const PiiShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="confidence" source="confidence" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="redactedText"
          source="redactedtext.id"
          reference="RedactedText"
        >
          <TextField source={REDACTEDTEXT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
