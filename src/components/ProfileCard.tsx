import React from 'react';

// Интерфейс для пропсов компонента ProfileCard
export interface ProfileCardProps {
    username: string; // Обязательное свойство — имя пользователя
    bio?: string;     // Необязательное свойство — краткая информация о пользователе
}

// Функциональный компонент ProfileCard, который отображает имя пользователя
// и, если передано, описание (bio)
const ProfileCard: React.FC<ProfileCardProps> = ({ username, bio }) => {
    return (
        <div className="profile-card">
            {/* Отображение имени пользователя */}
            <h2>{username}</h2>
            {/* Отображение описания, только если bio передано */}
            {bio && <p data-testid="profile-bio">{bio}</p>}
        </div>
    );
};

export default ProfileCard;