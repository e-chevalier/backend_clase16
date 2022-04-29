import { fork } from 'child_process'
import logger from '../../..//utils/log4js/log4js_config.js'

class Randoms {

    async getRandoms(req) {
        try {
            const { cant } = req.query            
            let url_randomsjs = process.cwd() + '/utils/js/randoms.js'
            const forked = fork(url_randomsjs, [cant? cant : 100000000])

            return forked
        
        } catch (error) {
            logger.error(error)
        }
    }

}

export let randomsService = new Randoms()