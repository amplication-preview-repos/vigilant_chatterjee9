import * as graphql from "@nestjs/graphql";
import { TextInputResolverBase } from "./base/textInput.resolver.base";
import { TextInput } from "./base/TextInput";
import { TextInputService } from "./textInput.service";

@graphql.Resolver(() => TextInput)
export class TextInputResolver extends TextInputResolverBase {
  constructor(protected readonly service: TextInputService) {
    super(service);
  }
}
