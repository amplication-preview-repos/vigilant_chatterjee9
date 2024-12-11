import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RedactedTextServiceBase } from "./base/redactedText.service.base";

@Injectable()
export class RedactedTextService extends RedactedTextServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
