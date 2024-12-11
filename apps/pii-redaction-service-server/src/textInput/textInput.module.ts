import { Module } from "@nestjs/common";
import { TextInputModuleBase } from "./base/textInput.module.base";
import { TextInputService } from "./textInput.service";
import { TextInputController } from "./textInput.controller";
import { TextInputResolver } from "./textInput.resolver";

@Module({
  imports: [TextInputModuleBase],
  controllers: [TextInputController],
  providers: [TextInputService, TextInputResolver],
  exports: [TextInputService],
})
export class TextInputModule {}
