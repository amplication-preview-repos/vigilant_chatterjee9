import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PiiService } from "./pii.service";
import { PiiControllerBase } from "./base/pii.controller.base";

@swagger.ApiTags("piis")
@common.Controller("piis")
export class PiiController extends PiiControllerBase {
  constructor(protected readonly service: PiiService) {
    super(service);
  }
}
