import logger from "../../../utils/log4js/log4js_config.js"
class AuthFacebook {

    async redirect() {
        try {
            logger.info(`test`)
            // LOGIC HERE

            return { status: "OK" }
        } catch (error) {
            logger.error(error)
        }
    }

}

export let authFacebookService = new AuthFacebook()