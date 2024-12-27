import Image from "next/image";
import img1 from '../../assets/pinkcityimg/userwoman.png';
import img2 from '../../assets/pinkcityimg/userman.png';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya T.',
      role: 'Happy Mom',
      feedback:
        'The kids’ clothing on Suncareshining Solution Private Limited is not only stylish but also super comfortable for my little ones. Highly recommend to all parents!',
      image: img1, // Replace with actual image URL
    },
    {
      name: 'Rahul G.',
      role: 'Satisfied Parent',
      feedback:
        'I love how affordable and durable the kids’ outfits are. Perfect for active children who love to play and explore!',
      image: img2, // Replace with actual image URL
    },
    {
      name: 'Ananya B.',
      role: 'First-Time Buyer',
      feedback:
        'I was amazed by the variety of kids’ clothing. The fabric is soft, and the designs are so cute. My kids are thrilled with their new outfits!',
      image: img1, // Replace with actual image URL
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center text-pinks mb-4">What Parents Are Saying</h1>
      <p className="text-center text-gray-600 mb-5">
        Parents trust us for stylish, comfortable, and high-quality kids’ clothing. Here’s what they have to say:
      </p>

      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle mb-3"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <h5 className="card-title text-dark">{testimonial.name}</h5>
                <h6 className="text-pinks">{testimonial.role}</h6>
                <p className="card-text text-gray-700 mt-3">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
