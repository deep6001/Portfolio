import express from 'express';
import { getOverview, getLeadIntelligence } from '../Controller/analyticsController.js';

const router = express.Router();

router.get('/overview', getOverview);
router.get('/leads', getLeadIntelligence);

export default router;
