import { infoService } from '../services/infoService.js'
import logger from '../../../utils/log4js/log4js_config.js'

class Info {
    async getInfo(req, res, next) {
        try {
            let {status, info} = await infoService.getInfo()

            res.render('info', { info: info })

        } catch (error) {
            logger.error(error)
        }

    }

}

export let infoController = new Info()
