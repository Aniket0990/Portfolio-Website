import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for EmailJS can be added here as in script.js
    alert("Form submission logic will be integrated with EmailJS");
  };

  return (
    <section className="bg-[#e5ecfb] overflow-visible" id="contact">
      <h2 className="heading text-[3.5rem] font-extrabold text-center text-[#202020]"><i className="fas fa-headset"></i> Get in <span className="text-[#7303a7]">Touch</span></h2>

      <div className="max-w-[1050px] w-full bg-[#fff] rounded-[1.5rem] m-[1.5rem_0_1rem_0] md:m-[2rem_auto] shadow-[0_5px_10px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[1rem_0.5rem_1.2rem_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-between p-[12px_8px] md:p-[1.5rem_1.5rem]">
          <div className="hidden md:block max-w-[60%] ml-[4rem]">
            <img draggable="false" src="/assets/images/contact1.png" alt="Contact" className="w-full h-[40rem] relative object-contain" />
          </div>
          <form id="contact-form" onSubmit={handleSubmit} className="w-full mr-[1rem] md:w-[45%] md:mr-[3.5rem]">
            <div className="flex flex-col justify-center">
              <div className="h-[40px] flex relative m-[0.7rem] w-full">
                <input type="text" name="name" placeholder="Name" required className="peer w-full h-full outline-none p-[0_12px_0_42px] text-[16px] font-poppins rounded-[5px] border border-[#333] bg-[#e5ecfb] placeholder:text-[#333] focus:pl-[47px] focus:border-2 focus:border-[#7303a7] transition-all duration-300" />
                <i className='fas fa-user absolute top-[50%] left-[18px] text-[#333] text-[12px] pointer-events-none -translate-y-[50%] peer-focus:text-[#7303a7]'></i>
              </div>
              <div className="h-[40px] flex relative m-[0.7rem] w-full">
                <input type="text" name="email" placeholder="Email" required className="peer w-full h-full outline-none p-[0_12px_0_42px] text-[16px] font-poppins rounded-[5px] border border-[#333] bg-[#e5ecfb] placeholder:text-[#333] focus:pl-[47px] focus:border-2 focus:border-[#7303a7] transition-all duration-300" />
                <i className='fas fa-envelope absolute top-[50%] left-[18px] text-[#333] text-[12px] pointer-events-none -translate-y-[50%] peer-focus:text-[#7303a7]'></i>
              </div>
              <div className="h-[40px] flex relative m-[0.7rem] w-full">
                <input type="text" name="phone" placeholder="Phone" className="peer w-full h-full outline-none p-[0_12px_0_42px] text-[16px] font-poppins rounded-[5px] border border-[#333] bg-[#e5ecfb] placeholder:text-[#333] focus:pl-[47px] focus:border-2 focus:border-[#7303a7] transition-all duration-300" />
                <i className='fas fa-phone-alt absolute top-[50%] left-[18px] text-[#333] text-[12px] pointer-events-none -translate-y-[50%] peer-focus:text-[#7303a7]'></i>
              </div>
              <div className="relative m-[0.7rem] w-full">
                <textarea placeholder="Message" name="message" required className="peer w-full min-h-[130px] pt-[15px] outline-none p-[15px_12px_15px_42px] text-[16px] font-poppins rounded-[5px] border border-[#333] bg-[#e5ecfb] placeholder:text-[#333] focus:pl-[47px] focus:border-2 focus:border-[#7303a7] transition-all duration-300 resize-y scrollbar-hide"></textarea>
                <i className="fas fa-comment-dots absolute top-[15px] text-[20px] left-[15px] text-[#333] pointer-events-none peer-focus:text-[#7303a7]"></i>
              </div>
            </div>
            <div className="flex float-right flex-row-reverse mt-[0.5rem] mr-[0.7rem]">
              <button type="submit" className="text-[#fff] text-[1.3rem] cursor-pointer rounded-[5px] p-[8px_20px] bg-[#2506ad] shadow-[0px_5px_10px_rgba(48,68,247,0.6)] transition-all duration-300 font-nunito hover:bg-[#421cecf5] group flex items-center justify-center border-none outline-none">
                Submit <i className="fa fa-paper-plane relative top-0 left-[2px] text-[1.5rem] transition-all duration-300 text-[#fff] group-hover:left-[8px] ml-[0.5rem]"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
