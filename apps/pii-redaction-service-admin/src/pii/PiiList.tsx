import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { REDACTEDTEXT_TITLE_FIELD } from "../redactedText/RedactedTextTitle";

export const PiiList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"PIIS"} perPage={50} pagination={<Pagination />}>
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
        <TextField label="value" source="value" />{" "}
      </Datagrid>
    </List>
  );
};
