import cors from 'cors'
import express from 'express'

import { download } from './download.js';

const app = express();
app.use(cors());

app.get('/summary/:id', (req, res) => {
    download(req.params.id);
    res.send('ID do vídeo: ' + req.params.id);
});

app.listen(3333, () => console.log('Server is running on port 3333'));