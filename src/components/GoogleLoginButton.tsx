import React from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';

// Интерфейс описывает пропсы, передаваемые в компонент
interface GoogleLoginButtonProps {
    onSuccess: (credential: string) => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onSuccess }) => {
    return (
        <div>
            {/* Компонент GoogleLogin автоматически рендерит кнопку.
          При успешной аутентификации вызывается onSuccess с переданным токеном. */}
            <GoogleLogin
                onSuccess={(credential) => {
                    if (credential.credential) { console.log('Успех:', credential);}
                    else {
                        console.error('Токен не получен.');
                    }
                }}
                onError={() => {
                    console.log('Ошибка авторизации');
                }}
            />



        </div>
    );
};

export default GoogleLoginButton;