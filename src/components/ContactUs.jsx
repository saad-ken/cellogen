// src/components/ContactUs.jsx
import React, { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: "" });

    // super basic client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: "Please fill out all fields.",
      });
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      setStatus({
        submitting: false,
        success: false,
        error: "Please enter a valid email.",
      });
      return;
    }

    // pretend to send
    setTimeout(() => {
      setStatus({ submitting: false, success: true, error: "" });
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section className="relative pt-28 pb-20">
      {/* Emerald fruity background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-emerald-100 to-white" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        {/* playful fruity dots */}
        <div className="absolute -top-4 -left-6 w-40 h-40 rounded-full bg-emerald-200 blur-2xl" />
        <div className="absolute top-16 right-10 w-24 h-24 rounded-full bg-lime-200 blur-xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-emerald-300/60 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-emerald-800 bg-emerald-100 text-xs font-semibold">
            🍏 Alprimus Support
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-emerald-900 tracking-tight">
            Let’s Talk — We’re All Ears
          </h1>
          <p className="mt-3 text-emerald-700 max-w-2xl mx-auto">
            Questions, feedback, or partnership ideas? Drop us a line and we’ll
            squeeze out a quick reply. 🍋
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Contact info / card */}
          <aside className="lg:col-span-2">
            <div className="h-full rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg ring-1 ring-emerald-900/5 p-6 md:p-8 relative overflow-hidden">
              {/* Decorative fruits */}
              <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-emerald-200 blur-xl" />
              <div className="absolute right-10 bottom-8 text-5xl opacity-20 select-none">
                🍐
              </div>

              <h2 className="text-2xl font-bold text-emerald-900">
                Contact Details
              </h2>
              <p className="mt-2 text-emerald-700">
                We’re available Mon–Fri, 9am–6pm IST. Say hi anytime.
              </p>

              <dl className="mt-6 space-y-4 text-emerald-800">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-xl">📧</span>
                  <div>
                    <dt className="font-semibold">Email</dt>
                    <dd className="text-emerald-700">masiddiquui@gmail.com</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-xl">📞</span>
                  <div>
                    <dt className="font-semibold">Phone</dt>
                    <dd className="text-emerald-700">+91 91671 67266</dd>
                  </div>
                </div>
              </dl>
            </div>
          </aside>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white shadow-lg ring-1 ring-emerald-900/5 p-6 md:p-8"
              noValidate
            >
              <h3 className="text-xl md:text-2xl font-bold text-emerald-900">
                Send us a message 🍊
              </h3>
              <p className="text-emerald-700 mt-1">
                We usually reply within one business day.
              </p>

              {status.error && (
                <div className="mt-4 rounded-md bg-red-50 text-red-700 text-sm px-3 py-2">
                  {status.error}
                </div>
              )}
              {status.success && (
                <div className="mt-4 rounded-md bg-emerald-50 text-emerald-800 text-sm px-3 py-2">
                  Message sent! We’ll get back to you shortly.
                </div>
              )}

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-emerald-900"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-lg border border-emerald-200 bg-white px-3 py-2.5 text-emerald-900 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-emerald-900"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-emerald-200 bg-white px-3 py-2.5 text-emerald-900 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-emerald-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className="mt-2 w-full rounded-lg border border-emerald-200 bg-white px-3 py-2.5 text-emerald-900 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 resize-y"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-60"
                >
                  {status.submitting ? "Sending..." : "Send Message"}
                </button>

                <div className="text-sm text-emerald-700">
                  Or email us directly —{" "}
                  <span className="font-semibold">masiddiquui@gmail.com</span>
                </div>
              </div>
            </form>

            {/* Small reassurance note */}
            <p className="mt-4 text-xs text-emerald-700/90">
              We respect your privacy. Your information is safe and will not be
              shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
