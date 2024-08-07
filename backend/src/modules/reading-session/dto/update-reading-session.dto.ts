import { PartialType } from '@nestjs/mapped-types';
import { CreateReadingSessionDto } from './create-reading-session.dto';

export class UpdateReadingSessionDto extends PartialType(CreateReadingSessionDto) {}
