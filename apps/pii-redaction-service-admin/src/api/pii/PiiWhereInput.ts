import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RedactedTextWhereUniqueInput } from "../redactedText/RedactedTextWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PiiWhereInput = {
  confidence?: FloatNullableFilter;
  id?: StringFilter;
  redactedText?: RedactedTextWhereUniqueInput;
  typeField?: StringNullableFilter;
  value?: StringNullableFilter;
};
