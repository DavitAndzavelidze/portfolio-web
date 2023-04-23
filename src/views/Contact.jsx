export default function Contact() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[1rem] my-[6rem] lg:w-[1000px] lg:mx-auto lg:items-start lg:my-[20rem]">
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
          <button className="py-[1rem] mt-[1rem] w-[180px] rounded-[10px] text-[18px] fontFira text-[--green] border border-[--green] shadow-[0_5px_15px_rgba(0,0,0,0.35)] lg:hover:bg-[--greenTint] lg:duration-150">
            Say Hello
          </button>
        </div>
      </div>
    </>
  );
}
