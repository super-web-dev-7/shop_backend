import { Router } from 'express';
import * as TestController from '../controllers/test.controller';

const router = Router(); // eslint-disable-line new-cap

router.route('/')
/** GET /api/test - Test api */
    .get(TestController.test);

router.route('/importLanguage').get(TestController.importLanguage);
router.route('/importCountry').get(TestController.importCountries);
router.route('/createAssign').get(TestController.createAssign);
export default router;
