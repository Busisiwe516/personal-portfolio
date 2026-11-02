function Contact() {
  return (
    <>
      <section
        id="contact"
        className="mx-auto max-w-3xl px-8 py-16 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Get In Touch</h2>
        <p className="mb-8 text-lg text-gray-700">
          I'm always open to new opportunities, collaborations, and
          conversations. Feel free to reach out!
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:Busisiwemoloi75@gmail.com"
            className="rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700"
          >
            ✉️ Busisiwemoloi75@gmail.com
          </a>

          <a
            href="https://github.com/Busisiwe516"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
          >
            🐙 GitHub: Busisiwe516
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 px-8 py-6 text-center text-gray-300">
        <p>© 2026 Busisiwe Moloi. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Contact;
