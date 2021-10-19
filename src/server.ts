import { app } from './app';

const port = 4000;

app.listen(port, logServer);

function logServer() {
  console.log(`[server] > server started on port ${port}`)
}