import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ','D','e','r','e','k',','];
    const jobArray = ['w','e','b',' ', 'd','e','v','e','l','o','p','e','r','.'];

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 4000)
    }, [])

    return (
        <div className="home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>  
                <br />
                <span className={`${letterClass} _13`}>I</span>  
                <span className={`${letterClass} _14`}>'m</span>  
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={24}/>
                </h1>
                <h2>Data Scientist / Software Engineer / Student</h2>
                <Link to="/contact" className='flat-button'>CONTACT</Link>
            </div>
            <Logo />

            
        </div>
        
    )
}

export default Home;