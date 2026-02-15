import express from 'express';
import { trackVisit, trackEvent } from '../Controller/trackingController.js';

const router = express.Router();

router.post('/visit', trackVisit);
router.post('/event', trackEvent);

export default router;
