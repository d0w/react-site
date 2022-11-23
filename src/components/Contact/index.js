import './index.scss'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const contact = ['C','o','n','t','a','c','t',' ','m','e'];
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            '', //service key
            'template_4ycjpfp', // teplate key
            refForm.current,
            '', //INSERT PUBLIC API KEY HERE
        ).then (
            () => {
                alert('Message successfully sent!');
                window.location.reload(false);
            },
            () => {
                alert('Failed to send the message, try again');
            }
        )
    }

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)
    }, []);

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={contact}
                            idx={15} letterClass={letterClass}/>
                    </h1>
                    <p>
                        Feel free to contact me through this form or emailing me directly.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li className='half'>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea className="message" placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Derek Xu,
                    <br />
                    United States,
                    <br />
                    Boston MA, 02215 <br />
                    <span>derekxu888@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[42.359396, -71.065295]}
                        zoom={10}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={[42.359396, -71.065295]}>
                                <Popup>Come over for some coffee</Popup>
                            </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    );
};

export default Contact;
