import { Module } from "@nestjs/common";
import { RedactedTextModuleBase } from "./base/redactedText.module.base";
import { RedactedTextService } from "./redactedText.service";
import { RedactedTextController } from "./redactedText.controller";
import { RedactedTextResolver } from "./redactedText.resolver";

@Module({
  imports: [RedactedTextModuleBase],
  controllers: [RedactedTextController],
  providers: [RedactedTextService, RedactedTextResolver],
  exports: [RedactedTextService],
})
export class RedactedTextModule {}
