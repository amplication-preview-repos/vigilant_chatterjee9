import { RedactedText as TRedactedText } from "../api/redactedText/RedactedText";

export const REDACTEDTEXT_TITLE_FIELD = "originalTextId";

export const RedactedTextTitle = (record: TRedactedText): string => {
  return record.originalTextId?.toString() || String(record.id);
};
