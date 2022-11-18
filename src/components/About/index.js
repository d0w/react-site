import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAngular } from '@fortawesome/free-solid-svg-icons'
import { faAngular,
     faCss3, 
     faJsSquare,
     faHtml5,
     faReact,
     faGitAlt } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders';
import Skills from './Skills';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)
    }, []);

    const aboutArray = ['A','b','o','u','t',' ','m','e'];
    const skillsArray = ['S','k','i','l','l','s'];
    return(
        <>
        <div className = 'container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={aboutArray}
                        idx={15} />
                </h1>
                <p>Hi! I'm Derek, currently an undergraduate computer engineering major at Boston University, class of 2026.</p>
                <p>I have an intense passion for software engineering and data science and have constantly been trying to further improve my skills and become acquainted with more programming languages, theory, and experiences. I'm looking to further expand my portfolio as well as work within the industry, developing software.</p>
                <p>As of now, my portfolio is on my GitHub &#40;link in the bottom left&#41; where I have personal projects including this website as well as code and the link for my recently published artificial-intelligence research paper on neural networks titled: SV-Learn. </p>
                <Skills letterClass={letterClass} skillsArray={skillsArray}/>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
    </>
    )
}

export default About;