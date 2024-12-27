import Header from "@/Layout/Header";

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <div style={{ marginTop: '40px' }}>
        <div className="bg-gray-50 py-8 px-6 sm:px-10 md:px-20">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-pink-600">Terms and Conditions</h1>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-pinks mb-4">Introduction</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              By using Suncareshining Solution Private Limited’s website and services, you agree to comply with the following Terms and Conditions. These are designed to ensure a safe, fair, and enjoyable shopping experience, particularly for our kids' clothing collections.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-pinks mb-4">Use of the Website</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              You agree to use our website responsibly and for lawful purposes only. Activities that may disrupt or harm the website's functionality are strictly prohibited.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-pinks mb-4">Account Responsibility</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you create an account on our website, you are responsible for safeguarding your account information and ensuring all activities under your account comply with these terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-pinks mb-4">Payment and Orders</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              All purchases must be made with accurate payment information. We reserve the right to cancel or refuse any orders, particularly in cases of inaccurate information or suspected fraudulent activity.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-pinks mb-4">Product Information</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              While we strive to provide accurate descriptions and images of our kids' clothing, minor variations in color, design, or size may occur. Such differences do not constitute grounds for returns beyond our standard policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-pinks mb-4">Returns and Refunds</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We offer a hassle-free return and refund policy for eligible kids' clothing items. Please review our Returns Policy page for detailed guidelines and timelines.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-pinks mb-4">Limitation of Liability</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Suncareshining Solution Private Limited is not liable for any indirect, incidental, or consequential damages resulting from the use of our website or the purchase of products.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-pinks mb-4">Changes to Terms</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Any updates will be posted on this page and will take effect immediately upon publication.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
