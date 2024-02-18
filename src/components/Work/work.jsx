import React from 'react';
import styles from './work.module.css'; 
import htmlIcon from '../../assets/work/html.png';
import cssIcon from '../../assets/work/css.png';
import reactIcon from '../../assets/work/react.png';
import nodeIcon from '../../assets/work/node.png';
import mongodbIcon from '../../assets/work/mongodb.png';
import pythonIcon from '../../assets/work/python.png';
import figmaIcon from '../../assets/work/figma.png';
import javaIcon from '../../assets/work/java.png';
import springbotIcon from '../../assets/work/Springbot.jpg';
import instacartIcon from '../../assets/work/Instacart.png';

const Work = () => {
    const iconsData = [
        { icon: htmlIcon, label: 'HTML' },
        { icon: cssIcon, label: 'CSS' },
        { icon: reactIcon, label: 'React' },
        { icon: nodeIcon, label: 'Node' },
        { icon: mongodbIcon, label: 'MongoDB' },
        { icon: pythonIcon, label: 'Python' },
        { icon: figmaIcon, label: 'Figma' },
        { icon: javaIcon, label: 'Java' },
    ];

    const iconRows = [];
    const iconsPerRow = 4;

    for (let i = 0; i < iconsData.length; i += iconsPerRow) {
        const rowIcons = iconsData.slice(i, i + iconsPerRow);
        iconRows.push(rowIcons);
    }

    return (
        <div className={styles.work} id="work">
            <h1>WORK</h1>
            <div className={styles.worksection}>
                <div className={styles.techIcon}>
                    {iconRows.map((row, rowIndex) => (
                        <div key={rowIndex} className={styles.workIconRow}>
                            {row.map(({ icon, label }) => (
                                <div className={styles.workIcon} key={label}>
                                    <img src={icon} alt={`${label}Icon`} />
                                    <h3>{label}</h3>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className={styles.workinfo}>
                    <div className={styles.workinfo1}>
                        <img src={springbotIcon} alt="Icon" />
                        <div className={styles.workintro}>
                            <h2>FULLSTACK DEVELOPER</h2>
                            <p>Sep, 2023 - Present</p>
                            <ul className={styles.workduty}>
                                <li>&gt; Optimized user interfaces for using React.js, improving overall performance.</li>
                                <li>&gt; Streamlined server-side logic and boosting data handling capabilities.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.workinfo1}>
                        <img src={instacartIcon} alt="Icon" className={styles.instacartIcon}/>
                        <div className={styles.workintro}>
                            <h2>SWE Intern, Instacart</h2>
                            <p>Apr, 2022 - Jun, 2022</p>
                            <ul className={styles.workduty}>
                                <li>&gt; Enhance Instacart's technology to seamlessly handle rising user and data loads.</li>
                                <li>&gt; Identify and rectify system bottlenecks, ensuring heightened efficiency.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
