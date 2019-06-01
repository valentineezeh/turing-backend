import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
// eslint-disable-next-line import/no-cycle
import app from '../app';

dotenv.config();

// get the host and port name
const hostName = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;

// Connect sequelise to the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PSWD, {
  host: process.env.DB_URL, // your server
  dialect: process.env.DB_DIALECT,
  logging: console.log,
  define: {
    timestamps: false
  }
});

sequelize
  .authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('connection has been established.');
  }).catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database: ', err);
  });

// finally, let's start our server...
const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${hostName}: ${server.address().port}`);
});

process.on('SIGINT', () => {
  sequelize.close(); // This close the connection to the database
  process.exit(0);
});

export default sequelize;
