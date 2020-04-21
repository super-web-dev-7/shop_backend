import { Router } from 'express';
import * as AssignController from '../controllers/assign.controller';

const router = Router(); // eslint-disable-line new-cap

router.route('/get').get(AssignController.getData);
router.route('/update').put(AssignController.updateData);

export default router;
