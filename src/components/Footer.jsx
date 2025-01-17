import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logoLight from '../../public/Media/logo light.png';

const Footer = () => {
    return (
        <div className='bg-[#020043]'>
            <footer className="footer py-28 max-w-7xl mx-auto text-white">
                <aside className='text-[#FFFFF5]'>
                    <img src={logoLight} alt="" />
                    <br />
                    <p>
                        123 Main Street Anytown, USA <br />Postal Code: 12345
                        <br />
                        <br />
                        <br />
                        Support: support@oyolloo.com <br />
                        (Available : 10:00am to 07:00pm)
                    </p>
                </aside>
                <nav>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Success Page</a>
                    <a className="link link-hover">Terms And Conditions</a>
                </nav>
                <nav>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Scheduling</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Patient Portal</a>
                </nav>
                <nav>
                    <h6 className='text-[#FFFFF5] text-lg'>Legal</h6>
                    <div className='flex gap-5 text-2xl mb-10'>
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                        <FaYoutube />
                    </div>
                    <p>@docplus 2024</p>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;