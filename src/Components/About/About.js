// pages/about.js

import Image from "next/image";
import img from '../../assets/pinkcityimg/productsmarque/about.jpg'

export default function About() {
  return (
    <>
    <div className="container py-5">
    <div className="row align-items-center">
            {/* Left Column (Image) */}
            <div className="col-md-6">
              <div className="image-container mb-4 mb-md-0">
                <Image
                  src={img}
                  alt="About Us"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>
    
            {/* Right Column (Content) */}
            <div className="col-md-6">
              <h1 className="text-pink mb-3">About Suncareshining solution private limited</h1>
              <p className="text-muted ">
                At Suncareshining solution private limited, we aim to provide a seamless shopping experience for our customers, offering everything from gadgets to fashion and home essentials. With a customer-first approach, we have revolutionized the online shopping experience, combining affordability, quality, and convenience all in one platform.
              </p>
 
              
           
            </div>
               
            <div className="vision mb-4">
                <h3 className="text-dark">Our Vision</h3>
                <p className="text-muted">
                  Our vision is to be the leading online platform that offers a diverse range of products, ensuring quality, convenience, and satisfaction for all our customers. We aspire to continuously improve, innovate, and provide the best shopping experience, empowering our customers with the tools to live their best lives.
                </p>
              </div>
    
              <div className="mission mb-4">
                <h3 className="text-dark">Our Mission</h3>
                <p className="text-muted">
                  We are committed to enhancing the lives of our customers by delivering top-quality products at affordable prices. Our mission is to bridge the gap between the best brands and our customers, ensuring that every purchase brings joy and satisfaction. We focus on making shopping easier, faster, and more enjoyable.
                </p>
              </div>
    
            
          </div>
    <div className="bg-gray-50 py-8 px-6 sm:px-10 md:px-20">
    

    <header className="text-center mb-12">
  <h1 className="text-4xl font-semibold text-pinks">
    About Suncareshining Solution Private Limited
  </h1>
</header>

<section className="mb-12">
  <h2 className="text-3xl font-semibold text-pinks mb-4">Our Vision</h2>
  <p className="text-lg text-gray-700 leading-relaxed">
    At Suncareshining Solution Private Limited, our vision is to provide a seamless shopping experience, focusing on high-quality and trendy kids' clothing. We aim to be the ultimate destination for parents looking for stylish, comfortable, and durable outfits for their children.
  </p>
</section>

<section className="mb-12">
  <h2 className="text-3xl font-semibold text-pinks mb-4">Why Choose Us?</h2>
  <ul className="space-y-4 text-lg text-gray-700">
    <li className="flex items-center">
      <span className="mr-2 text-pinks">✔</span>
      <strong>Wide Selection:</strong> Discover a range of kids' clothing, from casual wear to festive outfits.
    </li>
    <li className="flex items-center">
      <span className="mr-2 text-pinks">✔</span>
      <strong>Comfort & Quality:</strong> We prioritize materials that are gentle on your child's skin and built to last.
    </li>
    <li className="flex items-center">
      <span className="mr-2 text-pinks">✔</span>
      <strong>Affordable Prices:</strong> Enjoy competitive pricing without compromising on style or quality.
    </li>
    <li className="flex items-center">
      <span className="mr-2 text-pinks">✔</span>
      <strong>Customer Support:</strong> Our team is dedicated to helping parents find the perfect outfits for their kids.
    </li>
  </ul>
</section>

<section className="mb-12">
  <h2 className="text-3xl font-semibold text-pinks mb-4">Our Story</h2>
  <p className="text-lg text-gray-700 leading-relaxed">
    Suncareshining Solution Private Limited began with a mission to make shopping for kids' clothing fun and hassle-free. From our modest beginnings, we've grown into a trusted platform, helping parents find the perfect outfits for every occasion.
  </p>
</section>

<section>
  <h2 className="text-3xl font-semibold text-pinks mb-4">Our Commitment</h2>
  <p className="text-lg text-gray-700 leading-relaxed">
    We are committed to offering parents an exceptional shopping experience. Beyond just selling clothes, we focus on making every shopping journey for your kids' wardrobe delightful and convenient.
  </p>
</section>

      
    </div>
    </div></>
  );
}
