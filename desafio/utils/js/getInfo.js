import os from 'os'
import logger from '../log4js/log4js_config.js'

const getInfo = () => {
    const info = [
        {
            key: 'Argumentos de entrada',
            value: process.argv.slice(2).join(' ')
        },
        {
            key: 'Sistema Operativo',
            value: process.platform
        },
        {
            key: 'Cantidad de Procesadores',
            value: os.cpus().length
        },
        {
            key: 'Versión de node.js',
            value: process.version
        },
        {
            key: 'Memoria total reservada',
            value: (Math.round(process.memoryUsage().rss / 1024 / 1024 * 100) / 100) + " Mb"
        },
        {
            key: 'Path de ejecución',
            value: process.argv[1]
        },
        {
            key: 'Process id',
            value: process.pid
        },
        {
            key: 'Carpeta del proyecto',
            value: process.cwd
        }
    ]

    return info
}

//export default getInfo

process.on('message', msg => {
    logger.info(`Mensaje del padre: ${msg}`);
    // LOGIC HERE
    const response = getInfo()
    process.send(response)
    process.exit()
})

process.send('ready')

