const Faq = () => {
    return (
        <div className='max-w-7xl mx-auto pb-32'>
            <div>
                <button className="rounded-3xl border px-6 py-2 bg-white w-[140px]">Faq</button>
                <h2 className="py-5 text-4xl font-semibold">Frequntly Asked Question</h2>
            </div>
            <div className="collapse collapse-arrow bg-[#FFFFF5] mb-5">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium pl-10">What are your office hours?</div>
                <div className="collapse-content bg-white">
                    <p className='pl-6'>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FFFFF5] mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium pl-10">How can I schedule an appointment?</div>
                <div className="collapse-content bg-white">
                    <p className='pl-6'>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FFFFF5] mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium pl-10">Do you accept insurance?</div>
                <div className="collapse-content bg-white">
                    <p className='pl-6'>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FFFFF5] mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium pl-10">What should I bring to my appointment?</div>
                <div className="collapse-content bg-white">
                    <p className='pl-6'>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FFFFF5] mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium pl-10">Do you offer telemedicine appointments?</div>
                <div className="collapse-content bg-white">
                    <p className='pl-6'>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;