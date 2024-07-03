import { FaStar } from "react-icons/fa";
import userImg from '../../public/Media/Rectangle 27.png';

const Testimonial = () => {
    return (
        <div className="max-w-7xl mx-auto py-40">
            <div>
                <button className="rounded-3xl border px-6 py-2 bg-white w-[140px]">Testimonial</button>
                <h2 className="py-5 text-4xl font-semibold">What they say about us</h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="bg-[#FFFFF5] rounded-2xl p-5">
                    <h2 className="text-xl font-semibold py-5">Expertise and Compassion Combined</h2>
                    <p>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    <div className="flex gap-4 py-4">
                        <img className='rounded-full w-16 h-16' src={userImg} alt="" />
                        <div>
                            <h6 className='font-semibold'>Sarah D, <span className='font-normal text-sm'>IT Professional</span></h6>
                            <div className='*:text-[#FFE03D] flex gap-1'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFFFF5] rounded-2xl p-5">
                    <h2 className="text-xl font-semibold py-5">Life-Saving Care, Life-Changing Experience</h2>
                    <p>My experience at Healthcare Provider Name was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                    <div className="flex gap-4 py-4">
                        <img className='rounded-full w-16 h-16' src={userImg} alt="" />
                        <div>
                            <h6 className='font-semibold'>Michael R, <span className='font-normal text-sm'>Business Executive</span></h6>
                            <div className='*:text-[#FFE03D] flex gap-1'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFFFF5] rounded-2xl p-5">
                    <h2 className="text-xl font-semibold py-5">A Partner in Health and Wellness</h2>
                    <p>As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
                    <div className="flex gap-4 py-4">
                        <img className='rounded-full w-16 h-16' src={userImg} alt="" />
                        <div>
                            <h6 className='font-semibold'>David S, <span className='font-normal text-sm'>Lawyer</span></h6>
                            <div className='*:text-[#FFE03D] flex gap-1'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;