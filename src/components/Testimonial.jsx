import React from 'react'

const Testimonial = () => {
    return (
        <div>
          <section className="text-gray-600 body-font mb-10">
            {/* main  */}
            <div className="container px-5 py-10 mx-auto">
              {/* Heading  */}
              <h1 className=" text-center text-3xl font-bold text-black">
                Testimonial
              </h1>
              {/* para  */}
              <h2 className=" text-center text-2xl font-semibold mb-10">
                What our <span className=" text-purple-800 font-bold">customers</span> are
                saying
              </h2>
    
              <div className="flex flex-wrap -m-4">
                {/* Testimonial 1 */}
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div className="h-full text-center">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                    />
                    <p className="leading-relaxed">
                    DataDrift has revolutionized how I share my photography portfolios with clients. Uploading large image files used to be a hassle, but with DataDrift's seamless sharing, I can focus more on my passion for photography and less on file transfer worries.
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-purple-800 mt-6 mb-4" />
                    <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                      Janvi Gupta
                    </h2>
                  </div>
                </div>
    
                {/* Testimonial 2 */}
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div className="h-full text-center">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                    />
                    <p className="leading-relaxed">
                    As a project manager, DataDrift has been a game-changer for our team. Sharing massive datasets and reports across departments used to be time-consuming. Now, with DataDrift's efficient file-sharing capabilities, collaboration has become smoother and more productive.
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-purple-800 mt-6 mb-4" />
                    <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                      Ritanshu 
                    </h2>
                  </div>
                </div>
    
                {/* Testimonial 3 */}
                <div className="lg:w-1/3 lg:mb-0 p-4">
                  <div className="h-full text-center">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                    />
                    <p className="leading-relaxed">
                    I'm a teacher, and DataDrift has made it incredibly easy to distribute study materials and assignments to my students. The platform's user-friendly interface and secure sharing options ensure that my educational resources reach students promptly and safely.
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-purple-800 mt-6 mb-4" />
                    <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                      Rohit Sharma
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
}

export default Testimonial
