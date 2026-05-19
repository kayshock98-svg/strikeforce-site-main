export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-xl text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-sf-dark">
          Thank You!
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Your quote request has been received successfully.
        </p>

        <p className="text-gray-600 mb-8">
          Strike Force Pressure Washing will contact you within 2 hours.
        </p>

        <a
          href="tel:9193588306"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-xl transition"
        >
          Call Us Now
        </a>
      </div>
    </section>
  );
}