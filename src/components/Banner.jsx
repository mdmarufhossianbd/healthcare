import { FaStar } from "react-icons/fa";
import banner from '../../public/Media/Rectangle 5.png';
import batch from '../../public/Media/batch.png';
import confarance from '../../public/Media/confarance.png';
import report from '../../public/Media/report.png';
import revenue from '../../public/Media/revenue.png';
import users from '../../public/Media/users.png';

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <div className="relative mt-10">
                <img src={banner} alt="healthcare" className="w-full mx-auto h-full object-cover" />
                <div className="absolute rounded-[50px] inset-0 bg-gradient-to-l from-[#00c19e46] to-[#02004344]"></div>
            </div>
            <div className='grid grid-cols-5  gap-5 mt-10'>
                <div className='bg-white rounded-xl p-5 col-start-2 col-span-3 row-start-1 row-span-3'>
                    <p className='text-5xl font-bold px-12 text-center'>Comprehensive Care for Every Patient</p>
                </div>
                <div className='bg-white rounded-xl p-5 row-start-1 row-span-10 col-start-5 col-span-5 flex flex-col justify-between'>
                    <div>
                        <p className='text-5xl font-semibold'>50+</p>
                        <p className='py-5'>Free lession video for patient</p>
                    </div>
                    <img src={confarance} alt="" />
                </div>
                <div className='bg-white rounded-xl p-5 row-start-1 row-span-10'>
                    <div>
                        <p className='text-5xl font-semibold'>90%</p>
                        <p className='py-2'>Patient satisfaction rate, reflecting our commitment.</p>
                    </div>
                    <img src={report} alt="" />
                </div>
                <div className='bg-white rounded-xl p-5 row-start-4 row-span-7 relative'>
                    <div>
                        <p className='text-5xl font-semibold'>500+</p>
                        <p>Board-certified doctors</p>
                    </div>
                    <div className='absolute right-5 bottom-5'>
                        <img className='w-16' src={batch} alt="" />
                    </div>
                </div>
                <div className='bg-white rounded-xl p-5 row-start-5 row-span-6'>
                    <p className="flex items-center gap-2 text-5xl font-semibold">4.8 <FaStar className="text-[#FFE03D]" /> </p>
                    <p>Over 20,000 Patient</p>
                    <img className="w-28 pt-3" src={users} alt="" />
                </div>
                <div className='bg-white rounded-xl p-5 row-start-4 row-span-7 relative'>
                    <div>
                        <p className='text-5xl font-semibold'>$5000</p>
                        <p>Money spend for poor patient</p>                        
                    </div>
                    <div className='absolute right-5 bottom-5'>
                        <img className='w-16' src={revenue} alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;