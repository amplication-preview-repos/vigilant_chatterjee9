import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PiiListRelationFilter } from "../pii/PiiListRelationFilter";

export type RedactedTextWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  originalTextId?: StringNullableFilter;
  piis?: PiiListRelationFilter;
};
