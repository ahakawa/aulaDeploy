import mongoose from 'mongoose';
import express from 'express';

import {studentRouter} from './routes/studentRouter.js';

//Conectar ao MongoDB pelo Mongoose
(async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@${process.env.DB_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      console.log('Conectado no MongoDB com sucesso');
    } catch (error) {
      console.log("Erro ao conectar ao MongoDB" + error);
    }
  })();
  
const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => console.log('API iniciada'));






