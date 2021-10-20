import { Request, Response } from 'express';

import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const service = new AuthenticateUserService();

    await service.execute('');
  }
}

export { AuthenticateUserController };