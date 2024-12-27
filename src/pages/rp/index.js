// pages/refund-policy.js

import Header from "@/Layout/Header";

export default function RefundPolicy() {
  return (
    <><Header/>
        <div style={{marginTop:'40px'}}>
    <div className="bg-gray-50 py-8 px-6 sm:px-10 md:px-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-pink-600">Refund Policy</h1>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-pinks mb-4">Introduction</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Sunshine Kids, we strive to provide the best quality products for your little ones. This Refund Policy ensures a fair and smooth process for any returns or refunds.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-pinks mb-4">Eligibility for Refunds</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          You are eligible for a refund if:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>The product is defective or damaged upon delivery.</li>
          <li>The product does not match the description or photos provided on our website.</li>
          <li>There is a significant delay in delivery (more than 7 days beyond the expected time).</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-pinks mb-4">How to Request a Refund</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          To request a refund, please contact our customer support team within 15 days of receiving your order. Include your order number, a brief explanation, and any relevant photos for faster processing.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-pinks mb-4">Refund Processing Time</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Once approved, refunds will be processed within 5-7 business days. The time frame for the refund to reflect in your account depends on your payment method.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-pinks mb-4">Exceptions to the Refund Policy</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Refunds will not be provided in the following cases:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>The product is returned without its original packaging or accessories.</li>
          <li>The product is damaged due to improper use or handling.</li>
          <li>The product is a personalized, made-to-order, or perishable item (e.g., snacks, baby food).</li>
        </ul>
      </section>
    </div>
    </div></>
  );
}
