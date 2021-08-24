import express from 'express'
import useCtl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'
import shopCtrl from '../controllers/shop.controller'
const router = express.Router()


router.route('/api/shops/by/:userId')
 .post(authCtrl.requireSignin, authCtrl.hasAuthorization, 
 useCtl.isSeller, shopCtrl.create)

router.param('userId', useCtl.userByID)

export default router;