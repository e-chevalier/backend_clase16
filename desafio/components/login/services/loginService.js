import logger from "../../../utils/log4js/log4js_config.js"
class Login {

    async getLogin(req) {

        try {
            let response = {}

            const {retry} = req.query

            if (req.isAuthenticated()) {
                logger.info("Usuario logueado")
                response = { status: "LOGGEDIN" }
            } else {
                logger.info("Usuario no logueado")
                response = { status: "NOTLOGGEDIN", retry: retry }
            }

            return response

        } catch (error) {
            logger.error(error);
        }

    }

    async postLogin(req) {

        try {
            
            let response = {status: 'OK', user: req.user}

            return response

        } catch (error) {
            logger.error(error);
        }

    }

}

export let loginService = new Login()