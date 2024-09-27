import Container from "@/components/shared/Container";

const AboutUs = () => {
  return (
    <div>
      <Container>
        {/* page header */}
        <div className="flex flex-col items-center text-center gap-4 font-medium py-14 md:py-16 lg:py-20">
          <span className="text-sm font-semibold border rounded-full px-3 py-1">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold pt-2 max-w-screen-lg">
            GameSpaces is bringing sports facilities back to the future.
          </h1>
          <p className="font-medium md:text-lg">
            Stop fighting your scheduling software. It's time to start loving
            it.
          </p>
        </div>
        {/* images gallery section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-3">
            <img
              src="https://www.bbpsmv.com/images/sports/sports-banner.jpg"
              alt="sports image"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="md:col-span-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Youth-soccer-indiana.jpg/1200px-Youth-soccer-indiana.jpg"
              alt="sports image"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="md:col-span-3">
            <img
              src="https://www.washingtonpost.com/resizer/MeGFFLJZINBpnH8JEK_HWevLJ9o=/arc-anglerfish-washpost-prod-washpost/public/7GUDLGQP3UI6VESMWNGQTO6JJA.jpg"
              alt="sports image"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        {/* our mission section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between py-16">
          <div className="md:col-span-2">
            <h1 className="text-slate-900 text-2xl md:text-3xl font-extrabold mb-4">
              Your Vision
            </h1>
            <p className="text-slate-600 font-medium">
              We envision a thriving sports ecosystem with innovative
              technologies that enhance skills and cultivate a love for athletic
              pursuits. Our platform inspires individuals to unleash their full
              potential in their chosen sports.
            </p>
            <p className="text-slate-600 font-medium">
              We revolutionize the world of sports, empowering coaches and
              athletes to excel. Our platform offers comprehensive tools and
              support for growth within the sports community. Join us and reach
              new heights of excellence!
            </p>
          </div>
          <div className="bg-primary text-white p-6 rounded-md">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
              Our Mission
            </h1>
            <p className="font-medium">
              We provide athletes with a seamless platform for connectivity,
              personalized insights, and educational resources. Together, we
              foster a collaborative community that supports growth and success
              in all sports.
            </p>
          </div>
        </div>
        {/* our team section */}
        <div className="py-8 md:py-12">
          <h1 className="text-slate-900 text-3xl md:text-4xl font-extrabold mb-4 text-center">
            Meet Our Team
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-medium text-center">
            Our team united by passion, driven by excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
            <div className="min-h-96 bg-gradient-to-t from-black to-zinc-500 relative flex justify-center rounded-lg">
              <img
                src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727308800&semt=ais_hybrid"
                alt="team member image"
                className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
              />
              <div className="text-center text-white py-6 absolute bottom-2">
                <h3 className="text-xl font-bold">Adrian</h3>
                <p className="font-semibold">Team Leader</p>
              </div>
            </div>
            <div className="min-h-96 bg-gradient-to-t from-black to-zinc-400 relative flex justify-center rounded-lg">
              <img
                src="https://static.vecteezy.com/system/resources/previews/024/344/084/non_2x/businessman-isolated-illustration-ai-generative-free-png.png"
                alt="team member image"
                className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
              />
              <div className="text-center text-white py-6 absolute bottom-2">
                <h3 className="text-xl font-bold">Anto</h3>
                <p className="font-semibold">Chief Executive Officer</p>
              </div>
            </div>
            <div className="min-h-96 bg-gradient-to-t from-black to-zinc-400 relative flex justify-center rounded-lg">
              <img
                src="https://www.pngall.com/wp-content/uploads/15/Man-In-Suit-PNG-Pic.png"
                alt="team member image"
                className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
              />
              <div className="text-center text-white py-6 absolute bottom-2">
                <h3 className="text-xl font-bold">Andrew</h3>
                <p className="font-semibold">Designer</p>
              </div>
            </div>
            <div className="min-h-96 bg-gradient-to-t from-black to-zinc-500 relative flex justify-center rounded-lg">
              <img
                src="https://i.pinimg.com/736x/dd/ca/f4/ddcaf4fb59a7be7af7c6cf34abf18c1c.jpg"
                alt="team member image"
                className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
              />
              <div className="text-center text-white py-6 absolute bottom-2">
                <h3 className="text-xl font-bold">Lucass Finn</h3>
                <p className="font-semibold">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
