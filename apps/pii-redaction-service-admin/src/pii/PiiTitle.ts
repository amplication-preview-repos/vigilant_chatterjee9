import { Pii as TPii } from "../api/pii/Pii";

export const PII_TITLE_FIELD = "typeField";

export const PiiTitle = (record: TPii): string => {
  return record.typeField?.toString() || String(record.id);
};
