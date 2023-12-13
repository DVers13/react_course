import Illustration from '../../assets/illustration.png';
import style from './Leading.module.css'

function Leading() {


  return (
    <header className="header">
      <div className={style.row}>
      <img src={Illustration}/>
        <div className={style.column}>
          <span className={style.title}>
          Leading healthcare providers
          </span>
          <div className={style.line}></div>
          <span className={style.subtitle}>
          We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver
          </span>
          <button className={style.circle}>Learn more</button>
        </div>
      </div>
    </header>
  );
}

export default Leading