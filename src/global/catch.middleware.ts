import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common';
@Injectable()
export class CatchMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    try{
      next();
    }catch (e) {
      throw new BadRequestException(e)
    }

  }
}
