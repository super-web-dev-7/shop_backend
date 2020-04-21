import { Router } from 'express';
import * as LanguageController from '../controllers/language.controller';

const router = Router(); // eslint-disable-line new-cap

router.route('/').get(LanguageController.getAll);
router.route('/getAllLanguages').get(LanguageController.getAll);
router.route('/addLanguage').post(LanguageController.addLanguage);
router.route('/deleteLanguage/:id').delete(LanguageController.deleteLanguage);
router.route('/editLanguage/:id').put(LanguageController.editLanguage);
export default router;
