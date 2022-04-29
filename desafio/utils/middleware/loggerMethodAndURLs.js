import logger from '../log4js/log4js_config.js'

const loggerMethodAndURLs = (req, res, next) => {
    logger.info(`METHOD: ${req.method} - Resource: ${req.protocol + '://' + req.get('host') + req.originalUrl}`)
    return next()
}

export default loggerMethodAndURLs