import style from './ServiceCard.module.css'

function ServiceCard(props: { img: string; title: string; subtitle: string;}){
    return (
        <div className={style.card}>
            <img className = {style.image} src = {props.img}/>
            <span className= {style.title}>{props.title}</span>
            <span className= {style.subtitle}>{props.subtitle}</span>
        </div>
    );
}

export default ServiceCard