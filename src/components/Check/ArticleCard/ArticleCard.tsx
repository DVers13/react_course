import style from './ArticleCard.module.css';

function ArticleCard(props: { img: string; title: string; subtitle: string;}){
    return (
        <div className={style.card}>
        <img className = {style.image} src = {props.img}/>
        <span className= {style.title}>{props.title}</span>
        <span className= {style.subtitle}>{props.subtitle}</span>
        <button className={style.circle}>Read more</button>
    </div>
    );
};

export default ArticleCard;