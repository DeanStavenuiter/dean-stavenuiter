"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AnimatedTitle from "./animations/AnimatedTitle";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { sendContactEmail } from "@/app/actions/contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (!formContainerRef.current) return;

    const container = formContainerRef.current;

    // Set initial state for form elements
    const formElements = container.querySelectorAll(".form-element");
    gsap.set(formElements, {
      opacity: 0,
      y: 20,
    });

    // Animate form elements on scroll
    gsap.to(formElements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await sendContactEmail(data);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! I'll get back to you soon.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 md:px-20">
      <AnimatedTitle title="Contact" />
      <div ref={formContainerRef} className="max-w-2xl mx-auto mt-12">
        <p className="text-lg leading-relaxed text-black mb-8 text-center form-element">
          Have something in mind? I’m all ears. Let’s connect!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div className="form-element">
            <label
              htmlFor="name"
              className="block text-base font-medium text-black mb-2"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className={`w-full text-black px-4 py-3 border-[1px] rounded-lg font-spline-sans-mono text-base transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                errors.name
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 bg-white"
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="form-element">
            <label
              htmlFor="email"
              className="block text-base font-medium text-black mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`w-full text-black px-4 py-3 border-[1px] rounded-lg font-spline-sans-mono text-base transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                errors.email
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 bg-white"
              }`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Company Field */}
          <div className="form-element">
            <label
              htmlFor="company"
              className="block text-base font-medium text-black mb-2"
            >
              Company <span className="text-gray-500 text-sm">(Optional)</span>
            </label>
            <input
              id="company"
              type="text"
              {...register("company")}
              className="w-full text-black px-4 py-3 border-[1px] border-gray-300 rounded-lg font-spline-sans-mono text-base bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Your Company"
            />
          </div>

          {/* Message Field */}
          <div className="form-element">
            <label
              htmlFor="message"
              className="block text-base font-medium text-black mb-2"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={6}
              {...register("message")}
              className={`w-full text-black px-4 py-3 border-[1px] rounded-lg font-spline-sans-mono text-base transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none ${
                errors.message
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 bg-white"
              }`}
              placeholder="Tell me about your project or just say hello..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-element">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full bg-black cursor-pointer text-white py-4 px-6 rounded-lg font-sofia-sans-condensed text-lg font-semibold uppercase tracking-wide transition-all duration-300 overflow-hidden hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:hover:shadow-none"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left group-disabled:scale-x-0"></span>
            </button>
          </div>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              className={`p-4 rounded-lg text-center font-spline-sans-mono ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border-2 border-green-200"
                  : "bg-red-50 text-red-800 border-2 border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
