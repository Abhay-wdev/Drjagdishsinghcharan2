"use client";

export default function ServiceHero() {
  return (
    <div
      className="relative min-h-fit flex items-center justify-center p-3 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588776814546-ec7c3d6c02ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute   inset-0 bg-[#ffffff]"></div>
      <main className="relative bg-white/95 max-w-7xl w-full rounded-lg p-8 overflow-hidden shadow-lg">
        <div className="relative flex flex-col md:flex-row items-center">
          {/* Left side image with circles */}
          <div className="relative flex-shrink-0 mb-10 md:mb-0 md:mr-16">
            <div className="absolute w-60 h-60 rounded-full bg-[#003366] left-4 top-8"></div>
            <div className="absolute w-40 h-40 rounded-full bg-[#00a896] left-2 top-16"></div>
            <img
              src="/images/home/doctor2.jpg"
              alt="Spine and Orthopaedic Doctor"
              className="relative rounded-lg shadow-lg z-10 w-72 md:w-80 object-cover"
            />
            {/* Name Tag */}
            <div className="absolute bottom-2 left-6 flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm w-48 ring-1 ring-[#00a896]">
              {/* <img
                src=""
                alt="Dr. Jagdish Singh Charan"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#00a896]"
              /> */}
              <div className="flex flex-col">
                <span className="text-gray-900 font-semibold text-sm truncate">
                  Dr. Jagdish S. Charan
                </span>
                <span className="text-gray-500 text-xs">
                  Spine & Orthopaedics
                </span>
              </div>
            </div>
          </div>

          {/* Right side text content */}
          <section className="flex-1 max-w-xl z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#003366] leading-tight mb-6">
              Spine & Orthopaedic <br />
              <span className="text-gray-900">Services</span>
            </h1>

            <p className="text-gray-700 text-base md:text-lg mb-6">
              We offer comprehensive diagnosis, surgical treatments, and
              rehabilitation care for spine disorders, fractures, joint issues,
              and all orthopaedic conditions with advanced medical expertise.
            </p>

            <button className="relative mb-3  px-5 py-2 text-white font-bold rounded-full bg-[#006bb3] border-[3px] border-white/30 flex items-center justify-center gap-2 text-sm cursor-pointer overflow-hidden shadow-[0px_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out hover:scale-105 hover:border-white/90 group">
              {/* Shine Effect */}
              <span className="absolute top-0 left-[-100px] w-[100px] h-full opacity-60 bg-gradient-to-r from-transparent via-white to-transparent animate-shine"></span>
              {/* Icon */}
              <svg
                className="w-6 h-6 transition-all duration-300 ease-in-out group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              Book Appointment
            </button>

            {/* Stats */}
            <div className="flex justify-between max-w-md text-center select-none">
              <div>
                <p className="font-extrabold text-lg text-gray-900">15+</p>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="font-extrabold text-lg text-gray-900">5000+</p>
                <p className="text-gray-600 text-sm">Surgeries Done</p>
              </div>
              <div>
                <p className="font-extrabold text-lg text-gray-900">100K+</p>
                <p className="text-gray-600 text-sm">Happy Patients</p>
              </div>
            </div>
          </section>
        </div>
      </main>
       
    </div>
  );
}
