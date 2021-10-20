import { Router } from 'express';
import { GitHubRouter } from './routes/GitHubRouter';

const router = Router();

const GitHub = new GitHubRouter();

router.get('/github', GitHub.redirect);
router.get('/signin/callback', GitHub.signin);

export { router };