import Frame_1 from '../../assets/Frame_1.svg';
import Frame_2 from '../../assets/Frame_2.svg';
import Frame_3 from '../../assets/Frame_3.svg';
import Frame_4 from '../../assets/Frame_4.svg';
import Frame_5 from '../../assets/Frame_5.svg';
import Frame_6 from '../../assets/Frame_6.svg';
import style from './OurSevices.module.css'
import ServiceCard from "./ServiceCard/ServiceCard"
function OurServices() {
    return (
        <div className={style.container}>
            <div className={style.service}>
                <span className={style.title}>Our services</span>
                <div className={style.line}></div>
                <span className={style.subtitle}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</span>
                <div className={style.card_wrap}>
                    <ServiceCard img={Frame_1} title="Search doctor" subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
                    <ServiceCard img={Frame_2} title="Online pharmacy" subtitle="Buy  your medicines with our mobile application with a simple delivery system" />
                    <ServiceCard img={Frame_3} title="Consultation" subtitle="Free consultation with our trusted doctors and get the best recomendations" />
                    <ServiceCard img={Frame_4} title="Details info" subtitle="Free consultation with our trusted doctors and get the best recomendations" />
                    <ServiceCard img={Frame_5} title="Emergency care" subtitle="You can get 24/7 urgent care for yourself or your children and your lovely family" />
                    <ServiceCard img={Frame_6} title="Tracking" subtitle="Track and save your medical history and health data " />
                </div>
                <button className={style.circle}>Learn more</button>
            </div>
        </div>
    );

}

export default OurServices