"use client";
import ContentTextbox from '@/components/textbox/ContentTextbox';
import MomoCoinAbout from '@/components/sections/layouts/about/Momocoinabout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/HowToBuy3D';
import Tokenomics from '@/components/sections/layouts/tokenomics/Tokenomics';
import PepeHero from '@/components/sections/layouts/hero/PepeHero';

const heroStyle = {
  section: { className: 'relative flex items-center justify-center h-screen', backgroundColor: '#FFFFFF' },
  heading: { text: 'Welcome to Our Project', className: 'text-4xl font-bold', useRetroText: false },
  subheading: { text: 'Join us in building the future!', className: 'text-lg' },
  ctaStyle: { buttonText: 'Get Started!', buttonClassName: 'bg-primary text-white rounded-lg', addressText: 'Address:', addressClassName: 'text-gray-600' },
};

export default function Home() {
  return (
    <>
      <section id="hero" className="h-screen bg-gradient-to-r from-white to-gray-200">
        <PepeHero style={heroStyle} onMenuClick={() => {}} onContactClick={() => {}} />
      </section>
      <section id="features" className="py-24 bg-white">
        <ContentTextbox
          title={<h2 className="text-3xl font-bold">Our Features</h2>}
          description={<p className="text-lg">Explore the key features of our platform.</p>}
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center p-6 bg-blue-100 rounded-lg shadow-md">
              <h3 className="font-semibold">Feature 1</h3>
              <p className="text-sm">Short description of feature 1.</p>
            </div>
            <div className="flex items-center p-6 bg-blue-100 rounded-lg shadow-md">
              <h3 className="font-semibold">Feature 2</h3>
              <p className="text-sm">Short description of feature 2.</p>
            </div>
            <div className="flex items-center p-6 bg-blue-100 rounded-lg shadow-md">
              <h3 className="font-semibold">Feature 3</h3>
              <p className="text-sm">Short description of feature 3.</p>
            </div>
          </div>
        </ContentTextbox>
      </section>
      <section id="about" className="py-24 bg-noise">
        <MomoCoinAbout style={{ title: { text: 'About Us', className: 'text-3xl' }}} />
      </section>
      <section id="testimonials" className="py-24 bg-pattern">
        <ContentTextbox
          title={<h2 className="text-3xl font-bold">Testimonials</h2>}
          description={<p className="text-lg">What our users say about us.</p>}
          className="mb-8"
        >
          <div>
            <blockquote className="mb-4"><p>“Best experience ever!”</p><footer>- User 1</footer></blockquote>
            <blockquote className="mb-4"><p>“A game changer for my business.”</p><footer>- User 2</footer></blockquote>
          </div>
        </ContentTextbox>
      </section>
      <section id="cta" className="py-24 bg-white">
        <ContentTextbox
          title={<h2 className="text-3xl font-bold">Get Started Today!</h2>}
          description={<p className="text-lg">Join us and make a difference!</p>}
          className="mb-8"
        >
          <button className="bg-primary text-white rounded-lg px-4 py-2">Sign Up</button>
        </ContentTextbox>
      </section>
      <section id="contact" className="py-24 bg-white">
        <ContentTextbox
          title={<h2 className="text-3xl font-bold">Contact Us</h2>}
          description={<p className="text-lg">We'd love to hear from you!</p>}
          className="mb-8"
        >
          <form>
            <input type="text" placeholder="Name" className="border rounded p-2 mb-2 w-full" />
            <input type="email" placeholder="Email" className="border rounded p-2 mb-2 w-full" />
            <textarea placeholder="Message" className="border rounded p-2 mb-2 w-full" />
            <button className="bg-primary text-white rounded-lg px-4 py-2">Send</button>
          </form>
        </ContentTextbox>
      </section>
    </>
  );
}