import express from 'express';
import { saveBackup, importBackup } from '../../services/backup';

const router = express.Router();

router.post('/save', (req, res, next) => {
    const result = saveBackup(req.body);
    res.send(result);
});

router.get('/import', async (req, res, next) => {
    const result = await importBackup();
    res.send(result);
});

export default router;