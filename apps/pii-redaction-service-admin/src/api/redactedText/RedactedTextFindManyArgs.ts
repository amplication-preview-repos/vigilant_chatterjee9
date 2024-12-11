import { RedactedTextWhereInput } from "./RedactedTextWhereInput";
import { RedactedTextOrderByInput } from "./RedactedTextOrderByInput";

export type RedactedTextFindManyArgs = {
  where?: RedactedTextWhereInput;
  orderBy?: Array<RedactedTextOrderByInput>;
  skip?: number;
  take?: number;
};
