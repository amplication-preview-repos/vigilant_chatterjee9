import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { REDACTEDTEXT_TITLE_FIELD } from "./RedactedTextTitle";

export const RedactedTextShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="originalTextId" source="originalTextId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Pii"
          target="redactedTextId"
          label="PIIS"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
