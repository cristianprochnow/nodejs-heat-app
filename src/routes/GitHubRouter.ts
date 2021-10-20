import { Request, Response } from 'express';

class GitHubRouter {
  redirect(_, response: Response) {
    const gitHubClientID = process.env.GITHUB_CLIENT_ID;
    const url = `https://github.com/login/oauth/authorize?client_id=${gitHubClientID}`;

    response.redirect(url);
  }

  signin(request: Request, response: Response) {
    type GitHubQuery = {
      code: string
    };
  
    const { code } = request.query as GitHubQuery;
  
    return response.json(code);
  }
}

export { GitHubRouter };