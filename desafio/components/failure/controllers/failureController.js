import { failureService } from '../services/failureService.js'
import logger from '../../../utils/log4js/log4js_config.js'

class Failure {
    async getFailure(req, res, next) {
        try {
            let {status, message} = await failureService.getFailure(req)

            res.render('failure', { message_status: message })

        } catch (error) {
            logger.error(error)
        }

    }

}

export let failureController = new Failure()
