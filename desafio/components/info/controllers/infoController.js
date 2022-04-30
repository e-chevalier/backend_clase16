import { infoService } from '../services/infoService.js'
import logger from '../../../utils/log4js/log4js_config.js'

class Info {
    async getInfo(req, res, next) {
        try {
            let {status, info} = await infoService.getInfo()

            res.render('info', { info: info })

            // const { verbose } = req.query

            // let forked = await infoService.getInfo()

            // forked.on('message', msg => {
            //     if(msg == 'ready'){
            //         logger.info(msg)
            //         forked.send("Esperando resultado.")
            //     } else {
            //         //FOR CHECK COMPRESSION
            //         //res.setHeader('Cache-Control', 'no-transform')

            //         if (verbose) { console.log(msg) }
            //         res.render('info', { info: msg })
            //     }
            // })

        } catch (error) {
            logger.error(error)
        }

    }

}

export let infoController = new Info()
