import { Router } from 'express';
import * as ShopController from '../controllers/shop.controller';

const router = Router();

router.route('/addShop').post(ShopController.addShop);
router.route('/getAllShops').get(ShopController.getAllShops);
router.route('/deleteShop/:id').delete(ShopController.deleteShop);
router.route('/editShop/:id').put(ShopController.editShop);

export default router;
