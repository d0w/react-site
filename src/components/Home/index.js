import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />I'm Derek,
                <br />
                A software engineer
                </h1>
                <h2>Data Scientist / Software Engineer / Student</h2>
                <Link to="/contact" className='flat-button'>CONTACT</Link>
            </div>
        </div>
    )
}

export default Home;