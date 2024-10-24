import grainBackground from "@/assets/images/grain.jpg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
export const ContactSection = () => {
  return (
    <section className="py-16 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        {" "}
        <div className="bg-gradient-to-r from-emerald-400 to-sky-400 text-gray-950 text-center md:text-left rounded-3xl px-10 py-8 relative overflow-hidden z-0">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${grainBackground.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center text-white">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s build something extraordinary together!
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Have an idea that needs to come to life? Let&apos;s collaborate
                and turn your vision into reality. I&apos;m here to help you
                craft solutions that not only meet but exceed your goals.
              </p>
            </div>

            <a
              href="mailto:tsatam91@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gray-900 inline-flex text-white px-6 h-12 items-center rounded-xl gap-2 mt-8 w-max border border-gray-900">
                <span className="font-semibold">Contact me</span>
                <ArrowRightIcon className="size-4" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
