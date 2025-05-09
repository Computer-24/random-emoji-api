import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoggerService } from '../../logger.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly logger: LoggerService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    this.logger.info('Guard: Checking Authentication');
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];
    return apiKey === 'SECRET';
  }
}
