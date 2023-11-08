import express from 'express';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(resolve(__dirname, './dist')));

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
}); 