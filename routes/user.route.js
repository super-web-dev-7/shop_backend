import { Router } from 'express';
import * as UserController from '../controllers/user.controller';

const router = Router(); // eslint-disable-line new-cap

router.route('/getAll').get(UserController.getAll);
router.route('/editUser/:id').put(UserController.editUser);
router.route('/deleteUser/:id').delete(UserController.deleteUser);
router.route('/getUser/:id').get(UserController.getUser);
router.route('/getUsersForShopAdmin/:id').get(UserController.getUsersForShopAdmin);
router.route('/addShopAdmin').post(UserController.addShopAdmin);
router.route('/addUser').post(UserController.addUser);

export default router;
