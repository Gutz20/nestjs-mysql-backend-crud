import { applyDecorators, UseGuards } from '@nestjs/common';
import { Role } from '../enums/rol.enum';
import { RolesGuard } from '../guard/roles.guard';
import { Roles } from './roles.decorator';
import { AuthGuard } from '../guard/auth.guard';

export function Auth(role: Role) {
  return applyDecorators(Roles(role), UseGuards(AuthGuard, RolesGuard));
}
