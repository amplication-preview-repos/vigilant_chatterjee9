import { Module } from "@nestjs/common";
import { PiiModuleBase } from "./base/pii.module.base";
import { PiiService } from "./pii.service";
import { PiiController } from "./pii.controller";
import { PiiResolver } from "./pii.resolver";

@Module({
  imports: [PiiModuleBase],
  controllers: [PiiController],
  providers: [PiiService, PiiResolver],
  exports: [PiiService],
})
export class PiiModule {}
