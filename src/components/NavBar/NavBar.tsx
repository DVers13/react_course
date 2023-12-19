import style from './NavBar.module.css'

function NavBar() {


  return (
    <div className='NavBar'>
      <nav className={style.nav}>
        <div className={style.container}>
          <div className={style.nav_row}>
            <div className={style.circle}><span className={style.logo_text}>T</span></div>
              <a href="" className={style.logo}>HealthCare</a>
            <ul className={style.nav_list}>
              <li className='nav-list_item'><a href='' className={style.nav_list_link}>Home</a></li>
              <li className='nav-list_item'><a href='' className={style.nav_list_link}>Apps</a></li>
              <li className='nav-list_item'><a href='' className={style.nav_list_link}>Testimonials</a></li>
              <li className='nav-list_item'><a href='' className={style.nav_list_link}>About us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar
