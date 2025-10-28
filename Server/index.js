import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import AuthRoutes from './routes/auth.js';
import ContactRoutes from './routes/contact.js'
import SettingsRoutes from './routes/settings.js'
import connectDB from './config/dbconfig.js';
import Setting from "./models/setting.js";
import helmet from 'helmet';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors({
    origin: [
        process.env.FRONTEND_OLD_URL,   // production old frontend
        process.env.FRONTEND_ADMIN_URL, // production admin panel
    ],
    methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
    credentials: true,
}));

app.use(helmet());

connectDB();

const ensureSettingsExist = async () => {
  const exists = await Setting.findById("app_settings");
  if (!exists) {
    await Setting.create({
      _id: "app_settings",
      toEmail: process.env.TO_EMAIL,
      notification: true
    });
    console.log("Default settings created");
  } else {
    console.log("Settings already exist");
  }
};
ensureSettingsExist();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/auth', AuthRoutes);
app.use('/api/contact', ContactRoutes);
app.use('/api/settings', SettingsRoutes);

app.get('/', (req, res) => {
    res.send('Backend on the go!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})