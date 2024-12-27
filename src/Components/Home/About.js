import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import img from '../../assets/pinkcityimg/productsmarque/about.jpg';

export default function About() {
  return (
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
          <h1 className="text-pink mb-3">About Suncareshining Solution Private Limited</h1>
          <p className="text-muted">
            At Suncareshining Solution Private Limited, we are dedicated to providing stylish, comfortable, and high-quality clothing for kids. From vibrant casual wear to adorable party outfits, our collection is designed to meet the needs of every parent and child. We believe in delivering products that blend fashion with functionality, ensuring your little ones look and feel their best.
          </p>

          
        </div>
      </div>
      <div className="vision mb-4">
            <h3 className="text-dark">Our Vision</h3>
            <p className="text-muted">
              Our vision is to become the go-to brand for parents seeking trendy, durable, and comfortable clothing for their children. We aspire to inspire confidence and joy in every child by offering a delightful shopping experience for families.
            </p>
          </div>

          <div className="mission mb-4">
            <h3 className="text-dark">Our Mission</h3>
            <p className="text-muted">
              We are committed to delivering the finest kids' clothing at affordable prices. Our mission is to empower parents with a wide range of choices that ensure their children look stylish without compromising on comfort. We aim to make every purchase a joyous experience through quality products and exceptional service.
            </p>
          </div>

          <div className="why-choose-us">
            <h3 className="text-dark mb-3">Why Choose Us?</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Trendy and Comfortable Designs</li>
              <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Premium Fabrics Gentle on Kids' Skin</li>
              <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Affordable Pricing for All Budgets</li>
              <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Easy Size Guides for a Perfect Fit</li>
              <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Quick and Reliable Delivery Services</li>
              <li><i className="bi bi-check-circle text-success"></i> Dedicated Customer Support for Families</li>
            </ul>
          </div>
    </div>
  );
}
