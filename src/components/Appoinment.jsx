import { FiArrowUpRight } from 'react-icons/fi';
import appointment from '../../public/Media/Rectangle 32.png';
import logoDark from '../../public/Media/logo dark.png';

const Appoinment = () => {
    return (
        <div className='max-w-7xl mx-auto pb-32'>
            <div className="relative mt-10">
                <img src={appointment} alt="healthcare" className="w-full mx-auto h-full object-cover rounded-[50px]" />
                <div className="absolute rounded-[50px] inset-0 bg-gradient-to-l from-[#0200431a] to-[#020043]"></div>
                <div className="absolute top-36 left-10 text-white flex">
                    
                    <div>
                        <h2 className='text-5xl font-semibold w-1/2 mb-10'>Get Your First Appointment at 50% Off! </h2>
                        <div className='flex gap-10 '>
                            <button className="rounded-3xl border px-6 py-3 bg-[#FFC637] flex items-center gap-3 text-black font-semibold">Appointment <FiArrowUpRight className='text-2xl' /> </button>
                            <button className="rounded-3xl border border-white px-6 py-3 flex items-center gap-3 font-semibold">Learn More <FiArrowUpRight className='text-2xl' /> </button>
                        </div>
                    </div>
                    <div className='absolute -top-20 -right-64'>
                        <img src={logoDark} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Appoinment;