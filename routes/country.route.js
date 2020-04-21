import { Router } from 'express';
import * as CountryController from '../controllers/country.controller';

const router = Router(); // eslint-disable-line new-cap

router.route('/').get(CountryController.getAll);
router.route('/addCountry').post(CountryController.addCountry);
router.route('/deleteCountry/:id').delete(CountryController.deleteCountry);
router.route('/editCountry/:id').put(CountryController.editCountry);
export default router;
