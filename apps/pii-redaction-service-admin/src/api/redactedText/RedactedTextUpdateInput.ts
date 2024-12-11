import { PiiUpdateManyWithoutRedactedTextsInput } from "./PiiUpdateManyWithoutRedactedTextsInput";

export type RedactedTextUpdateInput = {
  content?: string | null;
  originalTextId?: string | null;
  piis?: PiiUpdateManyWithoutRedactedTextsInput;
};
