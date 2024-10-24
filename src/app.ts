import Express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { SERVER_CONFIG, CONFIG_CORS } from './configs/configs';

dotenv.config({ path: '.env.development.local' });
const app = Express();

app.disable('x-powered-by');
app.use(cors(CONFIG_CORS));
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.listen(SERVER_CONFIG.port, () => {
  console.log(`Server listen on port: ${SERVER_CONFIG.port}`);
});
