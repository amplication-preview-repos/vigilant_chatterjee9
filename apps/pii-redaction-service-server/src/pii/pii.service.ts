import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PiiServiceBase } from "./base/pii.service.base";

@Injectable()
export class PiiService extends PiiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
