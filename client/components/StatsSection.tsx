export default function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-gotham text-3xl md:text-4xl text-center text-white mb-12">
          Why Brands Work With Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "5,200+", subtitle: "Active Status Viewers" },
            { title: "3", subtitle: "Broadcast Lists" },
            { title: "2", subtitle: "WhatsApp Groups" },
            { title: "95%", subtitle: "Message Open Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 text-center glow-border hover-glow transition-all duration-300"
            >
              <h3 className="font-gotham text-4xl text-green-400 mb-2">
                {stat.title}
              </h3>
              <p className="text-lg text-gray-300">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
