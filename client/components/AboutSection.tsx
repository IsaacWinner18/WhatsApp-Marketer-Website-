import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-2xl p-8 md:p-12 glow-border">
          <h2 className="font-gotham text-3xl md:text-4xl text-center text-white mb-8">
            Who I Am
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-green-500/30">
                <Image
                  src="https://res.cloudinary.com/dkfmaqtpy/image/upload/v1742128152/john_doe_agmcuj.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                I&apos;m a full-time WhatsApp advertiser helping businesses grow
                with direct and engaged exposure. My network is built for
                results with real, active users who interact with promoted
                content.
              </p>
              <p className="text-lg md:text-xl text-gray-300">
                With years of experience in digital marketing, I&apos;ve
                perfected strategies that deliver measurable outcomes for brands
                of all sizes. I focus on authentic engagement rather than vanity
                metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
