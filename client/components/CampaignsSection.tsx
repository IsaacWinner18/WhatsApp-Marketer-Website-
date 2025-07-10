import Image from "next/image";

export default function CampaignsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800/50 to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-gotham text-3xl md:text-4xl text-center text-white mb-6">
          Recent Campaigns I&apos;ve Run
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Here are some campaigns I&apos;ve managed for clients.
        </p>

        {/* Mock phone frames with screenshots */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="glass-card rounded-lg overflow-hidden relative group"
            >
              <div className="relative pt-[150%]">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <Image
                    src="https://res.cloudinary.com/dkfmaqtpy/image/upload/v1742128152/john_doe_agmcuj.jpg"
                    alt={`Campaign ${item}`}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="absolute text-gray-400 text-sm">
                    Brand {item}
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 border border-gray-700/50 rounded-lg pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
