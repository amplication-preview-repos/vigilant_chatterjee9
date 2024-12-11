/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Pii as PrismaPii,
  RedactedText as PrismaRedactedText,
} from "@prisma/client";

export class PiiServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PiiCountArgs, "select">): Promise<number> {
    return this.prisma.pii.count(args);
  }

  async piis(args: Prisma.PiiFindManyArgs): Promise<PrismaPii[]> {
    return this.prisma.pii.findMany(args);
  }
  async pii(args: Prisma.PiiFindUniqueArgs): Promise<PrismaPii | null> {
    return this.prisma.pii.findUnique(args);
  }
  async createPii(args: Prisma.PiiCreateArgs): Promise<PrismaPii> {
    return this.prisma.pii.create(args);
  }
  async updatePii(args: Prisma.PiiUpdateArgs): Promise<PrismaPii> {
    return this.prisma.pii.update(args);
  }
  async deletePii(args: Prisma.PiiDeleteArgs): Promise<PrismaPii> {
    return this.prisma.pii.delete(args);
  }

  async getRedactedText(parentId: string): Promise<PrismaRedactedText | null> {
    return this.prisma.pii
      .findUnique({
        where: { id: parentId },
      })
      .redactedText();
  }
}
