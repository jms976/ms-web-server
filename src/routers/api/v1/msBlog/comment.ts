import express from 'express';

import { saveCommnet } from '../../../../controllers/comment';
const router = express.Router();

router.post('/', saveCommnet);

export default router;
