import {
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from '@gln-libs/node-infrastructure';

import { SignUpPayload } from '../interface/userAuth';

export class SignUpRequestBodySchema implements Partial<SignUpPayload> {
  @IsString()
  @MaxLength(50)
  fisrtName: string;

  @IsString()
  @MaxLength(50)
  lastName: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  @IsOptional()
  phone: string;
}
