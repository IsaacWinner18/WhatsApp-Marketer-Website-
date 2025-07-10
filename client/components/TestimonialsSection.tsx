"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    business: "Eco Beauty Store",
    text: "Our sales increased by 40% after running a campaign with this WhatsApp marketing service. Highly recommended!",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1748301435/WhatsApp_Image_2025-05-22_at_9.42.32_PM_xg6icd.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    business: "Tech Gadgets NG",
    text: "The engagement rates were incredible. We got more direct messages than we&apos;ve ever had from any other platform.",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1748301435/WhatsApp_Image_2025-05-22_at_9.42.32_PM_xg6icd.jpg",
  },
  {
    id: 3,
    name: "Amina Bello",
    business: "Fashion Hub",
    text: "Best return on ad spend we&apos;ve ever had. Will definitely be booking more slots in the future.",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1748301435/WhatsApp_Image_2025-05-22_at_9.42.32_PM_xg6icd.jpg",
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-gotham text-3xl md:text-4xl text-center text-white mb-12">
          What Clients Say
        </h2>

        <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-xl italic text-gray-300 mb-6">
                &quot;{testimonials[currentTestimonial].text}&quot;
              </p>
              <div className="text-green-400 font-bold text-lg">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-gray-400">
                {testimonials[currentTestimonial].business}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="bg-gray-800 hover:bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center hover-glow transition-all duration-300"
            >
              &larr;
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-gray-800 hover:bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center hover-glow transition-all duration-300"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
