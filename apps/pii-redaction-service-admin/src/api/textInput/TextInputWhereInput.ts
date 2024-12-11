import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TextInputWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
};
