import {React} from 'react';
import Style from './home.module.css';
import heroImg from '../../assets/hero/main3.jpg';
import info2Icon1 from '../../assets/hero/github.png'; 
import info2Icon2 from '../../assets/hero/linkedin.png'; 

const home = () => {
    return (
        <div className={Style.home}>
            <img className={Style.heroimg} src={heroImg} alt="heroImg" />
            <div className={Style.info}>
                <div className={Style.info1}>
                    <h1>HI, I'M</h1>
                    <h1>THORNGDAVID</h1>
                    <h1>A FULLSTACK DEVELOPER</h1>
                </div>
                <div className={Style.info2}>
                    <img src={info2Icon1} alt="GitHub" />
                    <img src={info2Icon2} alt="LinkedIn" />
                </div>
            </div>
        </div>
    )
}
export default home;