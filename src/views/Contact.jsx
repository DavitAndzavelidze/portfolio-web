import { motion } from "framer-motion";
import { topToBottom } from "../utils/motion";

export default function Contact() {
  return (
    <>
      <motion.div
        variants={topToBottom}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        id="contact"
        className="flex flex-col justify-center pt-[7rem] md:pt-[0px] items-center gap-[1rem] my-[6rem] lg:w-[1000px] lg:mx-auto lg:items-start lg:my-[20rem]"
      >
        <div>
          <h2 className="text-[25px] md:text-[30px] text-[--textWhite] font-bold border-b-[1px] border-[--lightPurple] mb-[1rem] fontFira ">
            Contact
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-[1rem] lg:items-start lg:relative">
          <h2 className="text-[20px] md:text-[25px] fontFira text-[--lightPurple]">
            Get In Touch
          </h2>
          <p className="mx-[2rem] md:mx-[4rem] text-[--textLight] text-center md:text-[20px] lg:text-start lg:mx-auto">
            Although I'm currently looking for any new opportunities, my inbox
            is always open. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
          <div className="lg:w-[1200px] lg:mt-[2rem]">
            <form
              action="https://getform.io/f/05a23bc2-0059-41f0-a916-73b34dcc178c"
              method="POST"
            >
              <div className="flex flex-col gap-[20px] p-[20px] lg:p-[0px]">
                <div className="flex flex-col gap-[20px] md:flex-row ">
                  <div className="flex flex-col gap-[5px]">
                    <label htmlFor="" className="text-[--green]">
                      Name
                    </label>
                    <input
                      className="p-[15px] w-[300px] lg:w-[590px] bg-[--lightNavy] rounded-[5px] focus:outline-none focus:border-[--green] border border-[--lightNavy] duration-150 text-[--textLight]"
                      type="text"
                      name="name"
                      placeholder="Name"
                      autoComplete="off"
                      id="contact-name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <label htmlFor="" className="text-[--green]">
                      Email
                    </label>
                    <input
                      className="p-[15px] w-[300px] bg-[--lightNavy] lg:w-[590px] rounded-[5px] focus:outline-none focus:border-[--green] border border-[--lightNavy] duration-150 text-[--textLight]"
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoComplete="off"
                      id="contact-name"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[5px]">
                  <label htmlFor="" className="text-[--green]">
                    Subject
                  </label>
                  <input
                    className="p-[15px] w-[300px] md:w-[620px] bg-[--lightNavy] lg:w-full rounded-[5px] focus:outline-none focus:border-[--green] border border-[--lightNavy] duration-150 text-[--textLight]"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    autoComplete="off"
                    id="contact-name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label htmlFor="" className="text-[--green]">
                    Message
                  </label>
                  <textarea
                    className="p-[15px] w-[300px] md:w-[620px] bg-[--lightNavy] lg:w-full rounded-[5px] focus:outline-none focus:border-[--green] border-[--lightNavy] border resize-none duration-150 text-[--textLight]"
                    name="message"
                    placeholder="Message"
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="w-[300px] md:w-[620px] lg:w-[1200px] mx-auto">
                <button className="py-[6px] mt-[1rem] lg:mt-[2rem] w-[60px] lg:w-[70px] rounded-[10px] text-[16px] md:text-[18px] fontFira border border-[--lightPurple] shadow-[0_5px_15px_rgba(0,0,0,0.35)] lg:hover:bg-[--greenTint] lg:duration-150 text-[--textLight]">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
}
