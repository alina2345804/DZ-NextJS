export interface CardProps {
    category: string;       // например, "Front-end"
    date: string;           // например, "1 месяц назад"
    point: string;           // точка
    title: string;          // заголовок карточки
    description: string;    // короткий анонс
    readTime: string;       // например, "3 минуты"
    onReadClick?: () => void; // обработчик клика по «Читать →»
    likeCount?: number;
    isLiked?: boolean;
}