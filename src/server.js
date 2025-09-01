import express from 'express';
import { totp } from 'otplib';
import nodemailer from 'nodemailer';

const app = express();
const port = 3000;

// Ваш секретный ключ (в реальных приложениях храните его в безопасном месте)
const MFA_SECRET = 'SOME_RANDOM_SECRET';

// Настройка почтового сервера для отправки email
const transporter = nodemailer.createTransport({
    service: 'mail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
    },
});

app.post('/send-mfa-code', async (req, res) => {
    const email ="anton.buldygin80@mail.ru";

  // console.log(req.body.email);
    // Генерация одноразового пароля
    const code = totp.generate(MFA_SECRET);

    try {
        // Отправка кода по email


        console.log(`Код отправлен на ${email}: ${code}`);
        res.status(200).json({ message: code });
    } catch (error) {
        console.error('Ошибка при отправке email:', error);
        res.status(500).json({ message: 'Ошибка при отправке кода' });
    }
});

app.listen(port, () => {
    console.log(`Сервер работает на http://localhost:${port}`);
});