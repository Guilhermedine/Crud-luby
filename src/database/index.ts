import {Sequelize} from "sequelize";
import  { configDB }  from "config/database";

const connection = new Sequelize(configDB)