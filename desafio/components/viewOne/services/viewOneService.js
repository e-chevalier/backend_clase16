import logger from "../../../utils/log4js/log4js_config.js";
class ViewOne {

    async getViewOne(req) {
        try {

            if (req.isAuthenticated()) {

                if (req.session.counter) {
                    req.session.counter++
                } else {
                    req.session.counter = 1
                }

            } 
                        
            //logger.info(req.user)
            return { status: "OK", data: {...req.user, counter: req.session.counter} }
        } catch (error) {
            logger.error(error);
        }
    }

}

export let viewOneService = new ViewOne()