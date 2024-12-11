import * as graphql from "@nestjs/graphql";
import { RedactedTextResolverBase } from "./base/redactedText.resolver.base";
import { RedactedText } from "./base/RedactedText";
import { RedactedTextService } from "./redactedText.service";

@graphql.Resolver(() => RedactedText)
export class RedactedTextResolver extends RedactedTextResolverBase {
  constructor(protected readonly service: RedactedTextService) {
    super(service);
  }
}
