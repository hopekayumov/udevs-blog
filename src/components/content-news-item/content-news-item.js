import './content-news-item.css'
import SigaretteHand from "./img/sigarette-hand.png";
import Views from './img/views.png'

export default function ContentNewsItem() {
    return (
        <div className='content-news__item'>
            <img src={SigaretteHand} className='content-news__img' alt="Sigarette hand"/>
            <article className='content-news__item--properties'>
                <span className='content-news__item--time'>18:26 11.01.2021</span>
                <img src={Views} className='content-news__item--views-logo' alt="Views svg"/>
                <span className='content-news__item--views'>365</span>
            </article>
            <a href='#' className='content-news__item--text'>ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....</a>
        </div>
    );
}
