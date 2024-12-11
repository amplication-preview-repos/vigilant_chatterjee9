import * as graphql from "@nestjs/graphql";
import { PiiResolverBase } from "./base/pii.resolver.base";
import { Pii } from "./base/Pii";
import { PiiService } from "./pii.service";

@graphql.Resolver(() => Pii)
export class PiiResolver extends PiiResolverBase {
  constructor(protected readonly service: PiiService) {
    super(service);
  }
}
