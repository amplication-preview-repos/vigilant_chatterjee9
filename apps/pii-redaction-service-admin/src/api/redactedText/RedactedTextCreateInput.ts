import { PiiCreateNestedManyWithoutRedactedTextsInput } from "./PiiCreateNestedManyWithoutRedactedTextsInput";

export type RedactedTextCreateInput = {
  content?: string | null;
  originalTextId?: string | null;
  piis?: PiiCreateNestedManyWithoutRedactedTextsInput;
};
