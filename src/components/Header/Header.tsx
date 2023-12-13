import HeaderIllustration from '../../assets/header_illustration.png';
import style from './Header.module.css'

function Header() {


  return (
    <header className={style.header}>
      <div className={style.header_row}>
        <div className={style.header_column}>
          <span className={style.header_title}>
          Virtual healthcare for you
          </span>
          <span className={style.header_subtitle}>
          Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone
          </span>
          <button className={style.circle}>Consult today</button>
        </div>
        <img src={HeaderIllustration}/>
      </div>
    </header>
  );
}

export default Header