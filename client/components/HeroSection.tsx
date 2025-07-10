import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dkfmaqtpy/image/upload/v1748455025/photo_2025-05-28_18-56-19_acaaab.jpg"
          alt="WhatsApp Marketing"
          fill
          className="object-cover w-full h-full opacity-80 "
          priority
        />
      </div>
      <div className="max-w-7xl h-full mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div>
              <h1 className="font-gotham text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Reach 5,000+ Real WhatsApp Users Instantly
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10">
                I help brands grow visibility and generate leads through
                WhatsApp status, broadcasts, and groups.
              </p>
              <div className="flex flex-col sm:flex-row justify-start gap-4">
                <a
                  href="#packages"
                  className="bg-green-600 text-center hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full hover-glow transition-all duration-300"
                >
                  Book Ad Slot
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-center hover:bg-gray-800 text-green-400 border border-green-600 font-bold py-3 px-8 rounded-full hover-glow transition-all duration-300"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
          {/* Removed the right-side image column */}
        </div>
      </div>
    </section>
  );
}
