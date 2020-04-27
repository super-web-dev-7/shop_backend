import { Router } from 'express';
import * as ProfileController from '../controllers/profile.controller';

const router = Router();

router.route('/getAllProfiles').get(ProfileController.getAll);
router.route('/addProfile').post(ProfileController.addProfile);
router.route('/deleteProfile/:id').delete(ProfileController.deleteProfile);
router.route('/editProfile/:id').put(ProfileController.editProfile);
router.route('/assignToProfile/:id').put(ProfileController.assignToProfile);
router.route('/getProfilesForShopAdmin/:shopId').get(ProfileController.getProfilesForShopAdmin);

export default router;
