const winston = require('winston');
const expressWinston = require('express-winston');

const logFormat = winston.format.printf(info => {
    return `${info.timestamp} [${info.level}]: ${JSON.stringify(info.message)}`;
});

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                logFormat
            )
        })
    ]
});

const expressLogger = expressWinston.logger({
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                logFormat
            )
        })
    ],
    msg: '{{req.ip}}[{{req.get("user-agent")}}] - [{{res.statusCode}}] {{req.method}} {{res.responseTime}}ms {{req.url}}'
});

const expressErrorLogger = expressWinston.errorLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                logFormat
            )
        })
    ]
});

module.exports = {
    logger,
    expressLogger,
    expressErrorLogger
};


