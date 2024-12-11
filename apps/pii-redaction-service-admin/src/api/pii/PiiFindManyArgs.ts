import { PiiWhereInput } from "./PiiWhereInput";
import { PiiOrderByInput } from "./PiiOrderByInput";

export type PiiFindManyArgs = {
  where?: PiiWhereInput;
  orderBy?: Array<PiiOrderByInput>;
  skip?: number;
  take?: number;
};
