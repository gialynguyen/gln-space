import {
  IsDateString,
  IsOptional,
  IsString,
  MaxLength,
} from '@gln-libs/node-infrastructure';

import { CreateUserTaskPayload } from '../interface/userTask';

export class CreateUserTaskRequestBodySchema
  implements Partial<CreateUserTaskPayload>
{
  @IsString()
  @MaxLength(50)
  title: string;

  @IsString()
  @MaxLength(255)
  @IsOptional()
  description: string;

  @IsDateString()
  startTime: string;

  @IsDateString()
  @IsOptional()
  endTime: string;
}
