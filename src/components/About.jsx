import { FiArrowUpRight } from "react-icons/fi";
import aboutImage from '../../public/Media/Rectangle 24.png';
const About = () => {
    return (
        <div className="max-w-7xl mx-auto py-[100px] flex gap-20">
            <div className="w-1/2 pr-10 flex flex-col justify-between">
                <button className="rounded-3xl border px-6 py-2 bg-white w-[140px]">Who we are</button>
                <div>
                    <h2 className="text-4xl font-bold w-[300px] py-5">We Help To Get Soultions</h2>
                    <p>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
                </div>
                <button className="rounded-3xl border px-6 py-2 bg-[#FFC637] flex items-center w-[160px]">Learn more <FiArrowUpRight/> </button>
            </div>
            <div>
                <div className="relative">
                    <img src={aboutImage} alt="" />
                    <div className="absolute bottom-0 -left-[100px] px-7 py-9 bg-[#343268] text-white w-[395px] rounded-3xl">
                        <h2 className="text-2xl font-semibold pb-5">Our mission is simple</h2>
                        <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;