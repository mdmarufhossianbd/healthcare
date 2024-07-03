import { FiArrowUpRight } from "react-icons/fi";
import doctorMeet from '../../public/Media/Rectangle 27-1.png';
import advancedTechnology from '../../public/Media/Rectangle 27-2.png';
import healthConsultancy from '../../public/Media/Rectangle 27.png';

const Service = () => {
    return (
        <div className='bg-[#FFFFF5] max-w-7xl mx-auto grid grid-cols-2 gap-10 p-10 rounded-[32px] mt-10'>
            <div className="pr-10 flex flex-col justify-between">
                <button className="rounded-3xl border px-6 py-2 bg-white w-[140px]">Service</button>
                <div>
                    <h2 className="text-4xl font-bold w-[350px] py-5">Empowering Health, Enriching Lives</h2>
                    <p>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                </div>
                <button className="rounded-3xl mt-10 border px-6 py-2 bg-[#FFC637] flex items-center w-[160px]">Appointment <FiArrowUpRight/> </button>
            </div>

            <div className="relative">
                <img className="w-full rounded-[30px]" src={advancedTechnology} alt="Advanced Technology" />
                <div className="bg-[#02004363] absolute bottom-5 left-5 p-4 w-[70%] text-white rounded-[30px] ">
                    <h2 className="font-medium text-xl pb-2">Advanced Technology</h2>
                    <p className="w-[90%]">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    <button className="absolute right-4 bottom-4 bg-[#FFC637] p-3 rounded-full text-white"><FiArrowUpRight className="text-2xl"/></button>
                </div>
            </div>

            <div className="relative">
                <img className="w-full rounded-[30px]" src={doctorMeet} alt="Online Doctor Meet" />
                <div className="bg-[#02004363] absolute bottom-5 left-5 p-4 w-[70%] text-white rounded-[30px] ">
                    <h2 className="font-medium text-xl pb-2">Online Doctor Meet</h2>
                    <p className="w-[90%]">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    <button className="absolute right-4 bottom-4 bg-[#FFC637] p-3 rounded-full text-white"><FiArrowUpRight className="text-2xl"/></button>
                </div>
            </div>

            <div className="relative">
                <img className="w-full rounded-[30px]" src={healthConsultancy} alt="Consultancy your health" />
                <div className="bg-[#02004363] absolute bottom-5 left-5 p-4 w-[70%] text-white rounded-[30px] ">
                    <h2 className="font-medium text-xl pb-2">Consultancy your health</h2>
                    <p className="w-[90%]">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    <button className="absolute right-4 bottom-4 bg-[#FFC637] p-3 rounded-full text-white"><FiArrowUpRight className="text-2xl"/></button>
                </div>
            </div>

        </div>
    );
};

export default Service;