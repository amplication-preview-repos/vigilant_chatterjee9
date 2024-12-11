import { SortOrder } from "../../util/SortOrder";

export type PiiOrderByInput = {
  confidence?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  redactedTextId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
