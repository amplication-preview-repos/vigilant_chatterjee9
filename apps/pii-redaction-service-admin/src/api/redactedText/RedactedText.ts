import { Pii } from "../pii/Pii";

export type RedactedText = {
  content: string | null;
  createdAt: Date;
  id: string;
  originalTextId: string | null;
  piis?: Array<Pii>;
  updatedAt: Date;
};
