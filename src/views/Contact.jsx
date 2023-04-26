export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col justify-center items-center gap-[1rem] my-[6rem] lg:w-[1000px] lg:mx-auto lg:items-start lg:my-[20rem]"
      >
        <div>
          <h2 className="text-[25px] md:text-[30px] text-[--textWhite] font-bold border-b-[1px] border-[--textLight] mb-[1rem] fontFira ">
            Contact
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-[1rem] lg:items-start lg:relative">
          <h2 className="text-[20px] md:text-[25px] fontFira text-[--green]">
            Get In Touch
          </h2>
          <p className="mx-[2rem] md:mx-[4rem] text-[--textLight] text-center md:text-[20px] lg:text-start lg:mx-auto">
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
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
                      className="p-[15px] w-[300px] lg:w-[590px] bg-[--lightNavy] rounded-[5px] focus:outline-none focus:border-[--green] border border-[--bgNavi] duration-150 text-[--textLight]"
                      type="text"
                      name="name"
                      placeholder="Name"
                      autoComplete="off"
                      id="contact-name"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <label htmlFor="" className="text-[--green]">
                      Email
                    </label>
                    <input
                      className="p-[15px] w-[300px] bg-[--lightNavy] lg:w-[590px] rounded-[5px] focus:outline-none focus:border-[--green] border border-[--bgNavi] duration-150 text-[--textLight]"
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoComplete="off"
                      id="contact-name"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[5px]">
                  <label htmlFor="" className="text-[--green]">
                    Subject
                  </label>
                  <input
                    className="p-[15px] w-[300px] md:w-[620px] bg-[--lightNavy] lg:w-full rounded-[5px] focus:outline-none focus:border-[--green] border border-[--bgNavi] duration-150 text-[--textLight]"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    autoComplete="off"
                    id="contact-name"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label htmlFor="" className="text-[--green]">
                    Message
                  </label>
                  <textarea
                    className="p-[15px] w-[300px] md:w-[620px] bg-[--lightNavy] lg:w-full rounded-[5px] focus:outline-none focus:border-[--green] border-[--bgNavi] border resize-none duration-150 text-[--textLight]"
                    name="message"
                    placeholder="Message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <div className="w-[300px] md:w-[620px] lg:w-[1200px] mx-auto">
                <button className="py-[1rem] mt-[1rem] lg:mt-[2rem] w-[180px] rounded-[10px] text-[18px] fontFira text-[--green] border border-[--green] shadow-[0_5px_15px_rgba(0,0,0,0.35)] lg:hover:bg-[--greenTint] lg:duration-150 text-[--textLight]">
                  Say Hello
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
