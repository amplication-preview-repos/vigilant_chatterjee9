import { SortOrder } from "../../util/SortOrder";

export type RedactedTextOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  originalTextId?: SortOrder;
  updatedAt?: SortOrder;
};
