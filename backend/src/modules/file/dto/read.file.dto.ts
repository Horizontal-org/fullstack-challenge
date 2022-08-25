import { Exclude, Expose, Type } from 'class-transformer';
import { IsEnum, IsString, IsUUID } from 'class-validator';

@Exclude()
export class ReadFileDto {
  @Expose()
  @IsUUID('4')
  id: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  readonly createdAt: string;
}
