import { logoutService } from '../services/logoutService.js'
import logger from '../../../utils/log4js/log4js_config.js';

class Logout {

    async getLogout(req, res, next) {
        try {
            let response = await logoutService.getLogout(req)
            res.render('logout', {username: response.username})   
        } catch (error) {
            logger.error(error);
        }
    }

}

export let logoutController = new Logout()
