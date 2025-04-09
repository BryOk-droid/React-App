const Home = () => {
  return (
    <div className="w-full pt-4">
      {" "}
      {/* Added top padding */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-8">This is the home page</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Design",
              description:
                "Beautiful, responsive websites tailored to your needs.",
            },
            {
              title: "E-Commerce",
              description:
                "Online stores that convert visitors into customers.",
            },
            {
              title: "SEO",
              description: "Get found by your ideal customers online.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
