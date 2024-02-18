import {React} from 'react'
import Style from './about.module.css'
import aboutImg from '../../assets/about/main2.jpg'
import cursorIcon from '../../assets/about/cursorIcon.png'
import serverIcon from '../../assets/about/serverIcon.png'
import uiIcon from '../../assets/about/uiIcon.png'
import TextScramble from '../AnimateText/textscramble'
const about = () => {
  return (
        <div className={Style.about} id="about">
            <h1>ABOUT ME</h1>
            <div className={Style.aboutSection}>
                <img className={Style.aboutImg} src={aboutImg} alt="aboutImg" />
                <div className={Style.about2}>
                    <div className={Style.about2Info}>
                        <img src={cursorIcon} alt="Icon" />
                        <div className={Style.about2Info1}>
                            <h2>Frontend Developer</h2>
                            <h3>I'm a frontend developer with experience in building responsive and optimized sites.</h3>
                        </div>
                    </div>
                    <div className={Style.about2Info}>
                        <img src={serverIcon} alt="Icon" />
                        <div className={Style.about2Info1}>
                            <h2>Backend Developer</h2>
                            <h3>I have experience developing fast and optimized back-end systems and APIs.</h3>
                        </div>
                    </div>
                    <div className={Style.about2Info}>
                        <img src={uiIcon} alt="Icon" />
                        <div className={Style.about2Info1}>
                            <h2>UI Designer</h2>
                            <h3>I have designed multiple landing pages and have created design systems as well.</h3>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className={Style.textscramble}>
                    <TextScramble/>
            </h2>
        </div>
        
  );
};

export default about;

