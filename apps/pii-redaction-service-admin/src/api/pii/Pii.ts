import { RedactedText } from "../redactedText/RedactedText";

export type Pii = {
  confidence: number | null;
  createdAt: Date;
  id: string;
  redactedText?: RedactedText | null;
  typeField: string | null;
  updatedAt: Date;
  value: string | null;
};
