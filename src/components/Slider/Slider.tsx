import style from './Slider.module.css';
import Person from '../../assets/person.png';

function Slider() {
    return (
        <div className={style.container}>
            <div className={style.slider}>
                <div className={style.column}>
                    <p className={style.title}>What our customer are saying</p>
                    <div className={style.row}>
                        <img className={style.img} src={Person} />
                        <div className={style.column}>
                            <span className={style.name}>Edward Newgate</span>
                            <span className={style.sub}>Founder Circle</span>
                        </div>
                        <span className={style.comment}>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
