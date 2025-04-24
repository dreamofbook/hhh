import React from 'react';
import '../Styles/homepage.css'
import watch from '../assets/image/watch.svg';
import shuttle from '../assets/image/shuttle.png';
import telegram from '../assets/image/telegram.png';
import world from '../assets/image/world.svg';
import settings from '../assets/image/settings.svg';
import DefaultButton from "../components/UI/Buttons/DefaultButton.jsx";
import Card from "../components/OtherComponents/Card/Card.jsx";
import FeedbackCarusel from "../components/OtherComponents/Feedback/FeedbackCarusel.jsx";

const HomePage = () => {
	return (
		<div className={'homepage container'}>
			<div className="text-title">
				<h1>Автопостинг в Telegram из любых источников</h1>
				<p>Настраивай публикации по интересующим темам и экономь время.</p>
				<DefaultButton path={'/'}>Попробовать бесплатно</DefaultButton>
			</div>
			<div className="cards">
				<Card image={shuttle} title={'Быстрый старт'} body={'Подключи источники, выбери темы и запускай автоматизацию за считанные минуты.'}/>
				<Card image={settings} title={'Гибкие настройки'} body={'Управляй расписанием, фильтрами и форматами публикаций.'}/>
				<Card image={telegram} title={'Публикация без забот'} body={'Твой Telegram-канал всегда наполнен актуальным контентом — без лишних усилий.'}/>
				<Card image={watch} title={'Публикации по расписанию'} body={'Настраивай точное время выхода контента, будь то каждый час, день или неделя.'}/>
				<Card image={world} title={'Поддержка множества источников'} body={'Мы поддерживаем RSS, YouTube, Twitter, Reddit, Medium и многие другие платформы.'}/>
			</div>
			<div className="feedback">
				<div className="feedback-Title">Отзывы наших клиентов</div>
				<FeedbackCarusel/>
			</div>
		</div>
	);
};

export default HomePage;