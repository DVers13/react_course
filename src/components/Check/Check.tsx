import image_1 from '../../assets/image_1.png';
import image_2 from '../../assets/image_2.png';
import image_3 from '../../assets/image_3.png';
import style from './Check.module.css';
import ArticleCard from "./ArticleCard/ArticleCard"

function Check() {
    return (
        <div className={style.container}>
            <div className={style.check}>
                <div className={style.check_column}>
                    <span className={style.title}>Check out our latest article</span>
                    <div className={style.line}></div>
                    <div className={style.card_row}>
                        <ArticleCard img={image_1}
                            title="Disease detection, check up in the laboratory"
                            subtitle="In this case, the role of the health laboratory is very important to do a disease detection..." />
                        <ArticleCard img={image_2}
                            title="Herbal medicines that are safe for consumption"
                            subtitle="Herbal medicine is very widely used at this time because of its very good for your health..." />
                        <ArticleCard img={image_3}
                            title="Natural care for healthy facial skin"
                            subtitle="A healthy lifestyle should start from now and also for your skin health. There are some..." />
                    </div>
                    <button className={style.circle}>View all</button>
                </div>
            </div>
        </div>
    );
};

export default Check;