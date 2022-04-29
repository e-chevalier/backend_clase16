import { viewOneService } from '../services/viewOneService.js'
import logger from '../../../utils/log4js/log4js_config.js';

class ViewOne {
    async getViewOne(req, res, next) {
        
        try {
            let { status, data } = await viewOneService.getViewOne(req)
            res.render('main', data )
        } catch (error) {
            logger.error(error);
        }
    }

}

export let viewOneController = new ViewOne()
