'use client';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook } from 'react-feather';
import Image from 'next/image';

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Sophia Chen",
      role: "Creative Director",
      avatar: "/team1.jpg",
      bio: "Former Vogue stylist with 10+ years in fashion"
    },
    {
      name: "James Wilson",
      role: "Head Designer",
      avatar: "/team2.jpg",
      bio: "Specializes in sustainable luxury fabrics"
    },
    {
      name: "Emma Rodriguez",
      role: "Customer Experience",
      avatar: "/team3.jpg",
      bio: "Ensuring every client feels valued"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image 
          src="/ui3.jpg"
          alt="Fashion Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Fashion Story</h1>
            <p className="text-xl max-w-2xl mx-auto">Where passion meets style since 2012</p>
          </motion.div>
        </div>
      </div>

      {/* Brand Story */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image 
              src="/ui2.jpg" 
              alt="Fashion design process"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Redefining Fashion</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in a small Parisian apartment, our brand has grown into an international 
              movement celebrating sustainable luxury. We believe fashion should make you look 
              incredible while feeling good about your impact.
            </p>
            <ul className="space-y-4">
              {[
                "✓ Ethically sourced materials",
                "✓ Handcrafted by expert artisans",
                "✓ Timeless designs over trends",
                "✓ Carbon-neutral shipping"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-[#E91E63] text-xl">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Meet The Designers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-[#E91E63] mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
                <div className="flex justify-center gap-3 mt-4">
                  <Instagram className="text-gray-500 hover:text-[#E91E63] cursor-pointer" />
                  <Twitter className="text-gray-500 hover:text-[#E91E63] cursor-pointer" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "♻️",
              title: "Sustainability",
              desc: "Using organic fabrics and eco-friendly dyes"
            },
            {
              icon: "✂️",
              title: "Craftsmanship",
              desc: "Each piece receives 20+ hours of hand-finishing"
            },
            {
              icon: "💎",
              title: "Luxury",
              desc: "Premium quality that stands the test of time"
            }
          ].map((value, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center"
            >
              <span className="text-4xl mb-4 block">{value.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#E91E63] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-6">Join Our Fashion Journey</h2>
          <p className="text-xl mb-8">
            Follow us for exclusive behind-the-scenes and new collection previews
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[#E91E63] rounded-lg font-medium flex items-center gap-2">
              <Instagram /> @OurFashionBrand
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-lg font-medium flex items-center gap-2">
              <Facebook /> Follow Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}