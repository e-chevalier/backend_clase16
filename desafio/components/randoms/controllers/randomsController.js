import { randomsService } from '../services/randomsService.js'
import logger from '../../../utils/log4js/log4js_config.js'

class Randoms {
    async getRandoms(req, res, next) {
        try {
            let forked = await randomsService.getRandoms(req)

            forked.on('message', msg => {
                if(msg == 'ready'){
                    logger.info(msg)
                    forked.send("Esperando resultado.")
                } else {
                    res.render('randoms', {data: msg, cant: req.query.cant || 100000000} )
                }
            })

        } catch (error) {
            logger.error(error)
        }

    }

}

export let randomsController = new Randoms()
