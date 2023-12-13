import Illustration from '../../assets/illustration_1.png';
import arrow from '../../assets/arrow.svg';
import style from './Download.module.css'

function Download() {


  return (
    <header className="header">
      <div className={style.row}>
        <div className={style.column}>
          <span className={style.title}>
          Download our mobile apps
          </span>
          <div className={style.line}></div>
          <span className={style.subtitle}>
          Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely
          </span>
          <button className={style.circle}>Download <img src={arrow}/></button>
        </div>
        <img src={Illustration}/>
      </div>
    </header>
  );
}

export default Download