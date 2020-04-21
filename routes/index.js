import { Router } from 'express';

import testRoutes from './test.route';
import authRoutes from './auth.route';
import languageRoutes from './language.route';
import countryRoutes from './country.route';
import userRoutes from './user.route';
import shopRoutes from './shop.route';
import profileRoutes from './profile.route';
import assignRoutes from './assign.route';

const router = Router(); // eslint-disable-line new-cap

// public route
router.use('/ping', testRoutes);
router.use('/auth', authRoutes);
router.use('/language', languageRoutes);
router.use('/country', countryRoutes);
router.use('/user', userRoutes);
router.use('/shop', shopRoutes);
router.use('/profile', profileRoutes);
router.use('/assign', assignRoutes);

export default router;
