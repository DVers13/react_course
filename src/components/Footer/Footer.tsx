import style from './Footer.module.css';

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.footer_row}>
                    <div className={style.footer_column_logo}>
                        <div className={style.logo}>
                            <div className={style.circle}><span className={style.logo_text}>T</span></div>
                            <span className={style.title}>HealthCare</span>
                        </div>
                        <span className={style.subtitle}>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</span>
                        <p className={style.copyright}>©HealthCare PTY LTD 2023. All rights reserved</p>
                    </div>
                    <div className={style.footer_column}>
                        <ul className={style.list}>
                            <li className={style.title}>Company</li>
                            <li>About</li>
                            <li>Testimonials</li>
                            <li>Find a doctor</li>
                            <li>Apps</li>
                        </ul>
                    </div>
                    <div className={style.footer_column}>
                        <ul className={style.list}>
                            <li className={style.title}>Region</li>
                            <li>Indonesia</li>
                            <li>Singapore</li>
                            <li>Hongkong</li>
                            <li>Canada</li>
                        </ul>
                    </div>
                    <div className={style.footer_column}>
                        <ul className={style.list}>
                            <li className={style.title}>Help</li>
                            <li>Help center</li>
                            <li>Contact support</li>
                            <li>Instructions</li>
                            <li>How it works</li>
                        </ul>
                    </div>

                </div>
            </div>

        </footer>
    );
}

export default Footer