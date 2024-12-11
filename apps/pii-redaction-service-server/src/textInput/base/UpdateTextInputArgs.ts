/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TextInputWhereUniqueInput } from "./TextInputWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TextInputUpdateInput } from "./TextInputUpdateInput";

@ArgsType()
class UpdateTextInputArgs {
  @ApiProperty({
    required: true,
    type: () => TextInputWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TextInputWhereUniqueInput)
  @Field(() => TextInputWhereUniqueInput, { nullable: false })
  where!: TextInputWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TextInputUpdateInput,
  })
  @ValidateNested()
  @Type(() => TextInputUpdateInput)
  @Field(() => TextInputUpdateInput, { nullable: false })
  data!: TextInputUpdateInput;
}

export { UpdateTextInputArgs as UpdateTextInputArgs };
