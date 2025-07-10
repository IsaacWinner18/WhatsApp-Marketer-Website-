export default function PackagesSection() {
  return (
    <section id="packages" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-gotham text-3xl md:text-4xl text-center text-white mb-12">
          Ad Slots & Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Basic",
              price: "₦2,000",
              duration: "1 Day Status",
              features: [
                "24 hours status visibility",
                "Reach 5,200+ users",
                "Direct message responses",
              ],
              popular: false,
            },
            {
              name: "Standard",
              price: "₦5,000",
              duration: "3 Days Status + Broadcast",
              features: [
                "3 days status visibility",
                "1 broadcast to 2,500 users",
                "Priority placement",
                "Basic analytics",
              ],
              popular: true,
            },
            {
              name: "Premium",
              price: "₦10,000",
              duration: "1 Week Status + Broadcast + Group Promo",
              features: [
                "7 days status visibility",
                "2 broadcasts to 5,200 users",
                "Group promotion in 2 active groups",
                "Detailed analytics",
                "Priority support",
              ],
              popular: false,
            },
          ].map((pkg, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl md:p-6 p-4 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular ? "glow-border" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <h3 className="font-gotham text-2xl text-white mb-1">
                {pkg.name}
              </h3>
              <p className="text-green-400 font-bold text-xl mb-4">
                {pkg.duration}
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">
                  {pkg.price}
                </span>
              </div>
              <ul className="mb-8 space-y-3">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-full text-center hover-glow transition-all duration-300"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
