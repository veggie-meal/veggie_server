// import dotenv from "dotenv";
// import path from "path";
// import os from "os";

const dotenv = require('dotenv');
const path = require('path');
const os = require('os');

process.env.ROOT_PATH = path.join(__dirname,"..");
dotenv.config({ path: path.join(__dirname, '.env.db.dv') });

class Config {
    constructor(){
        this.DB = {
            TYPE: process.env.DB_TYPE,
            HOST: process.env.DB_HOST,
            PORT: parseInt(process.env.DB_PORT, 10),
            USER: process.env.DB_USERNAME,
            PASSWORD: process.env.DB_PASSWORD,
            DATABASE: process.env.DB_DATABASE
        }
    };
    
}

module.exports = new Config();