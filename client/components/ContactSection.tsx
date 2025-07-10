export default function ContactSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-2xl p-8 md:p-12 glow-border border border-green-600/30">
          <h2 className="font-gotham text-3xl md:text-4xl text-center text-white mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-center text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to reach thousands of engaged WhatsApp users? Get in touch
            today to discuss your campaign.
          </p>
          <div className="text-center">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full hover-glow transition-all duration-300"
            >
              Chat with me now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
