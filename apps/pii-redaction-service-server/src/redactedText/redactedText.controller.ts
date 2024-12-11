import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RedactedTextService } from "./redactedText.service";
import { RedactedTextControllerBase } from "./base/redactedText.controller.base";

@swagger.ApiTags("redactedTexts")
@common.Controller("redactedTexts")
export class RedactedTextController extends RedactedTextControllerBase {
  constructor(protected readonly service: RedactedTextService) {
    super(service);
  }
}
