import { RedactedTextWhereUniqueInput } from "../redactedText/RedactedTextWhereUniqueInput";

export type PiiUpdateInput = {
  confidence?: number | null;
  redactedText?: RedactedTextWhereUniqueInput | null;
  typeField?: string | null;
  value?: string | null;
};
