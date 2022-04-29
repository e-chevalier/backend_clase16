import logger from "../../../utils/log4js/log4js_config.js"
class Registration {

    async getRegistration() {
        try {

            return { status: "OK" }
            
        } catch (error) {
            logger.error(error)
        }
    }

    async postRegistration(req) {
        try {

            let response = { status: 'OK' }
            return response

        } catch (error) {
            logger.error(error)
        }
    }

}

export let registrationService = new Registration()