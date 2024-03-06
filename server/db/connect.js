import { Sequelize } from 'sequelize';

import {  db as config, } from '../config.js';

const environment = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(
    config[environment],
    {
        logging: console.log
    }
);

export default sequelize;