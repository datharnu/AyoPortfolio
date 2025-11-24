// "use client";
// import React from "react";
// export default function EnhancedModelHeader() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-200/30 to-gray-300/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-slate-200/40 to-slate-300/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 text-center px-6">
//         {/* Main Name */}
//         <div className="mb-12">
//           <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.2em] text-gray-900 mb-4 animate-fade-in">
//             SIKIRU
//           </h1>
//           <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.3em] text-gray-700 animate-fade-in delay-300">
//             AYOMIDE
//           </h2>
//         </div>

//         {/* Elegant divider */}
//         <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-12 animate-fade-in delay-500"></div>

//         {/* Measurements in a more sophisticated layout */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 max-w-4xl mx-auto animate-fade-in delay-700">
//           {/* Height */}
//           <div className="text-center group">
//             <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 group-hover:text-gray-700 transition-colors">
//               Height
//             </div>
//             <div className="text-2xl md:text-3xl font-light text-gray-900 group-hover:scale-110 transition-transform">
//               6&apos;1&quot;
//             </div>
//           </div>

//           {/* Chest */}
//           <div className="text-center group">
//             <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 group-hover:text-gray-700 transition-colors">
//               Chest
//             </div>
//             <div className="text-2xl md:text-3xl font-light text-gray-900 group-hover:scale-110 transition-transform">
//               35
//             </div>
//           </div>

//           {/* Waist */}
//           <div className="text-center group">
//             <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 group-hover:text-gray-700 transition-colors">
//               Waist
//             </div>
//             <div className="text-2xl md:text-3xl font-light text-gray-900 group-hover:scale-110 transition-transform">
//               34
//             </div>
//           </div>

//           {/* Shoe */}
//           <div className="text-center group">
//             <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 group-hover:text-gray-700 transition-colors">
//               Shoe
//             </div>
//             <div className="text-2xl md:text-3xl font-light text-gray-900 group-hover:scale-110 transition-transform">
//               EU45
//             </div>
//           </div>

//           {/* Hair */}
//           <div className="text-center group">
//             <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 group-hover:text-gray-700 transition-colors">
//               Hair
//             </div>
//             <div className="text-2xl md:text-3xl font-light text-gray-900 group-hover:scale-110 transition-transform">
//               Black
//             </div>
//           </div>

//           {/* Eyes */}
//           <div className="text-center group">
//             <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 group-hover:text-gray-700 transition-colors">
//               Eyes
//             </div>
//             <div className="text-2xl md:text-3xl font-light text-gray-900 group-hover:scale-110 transition-transform">
//               Black
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";

export default function EnhancedModelHeader() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-200/30 to-gray-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-slate-200/40 to-slate-300/40 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        {/* Main Name */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.2em] text-gray-900 mb-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
            CHRIS
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.3em] text-gray-700 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]">
            VICTOR
          </h2>
        </div>

        {/* Elegant divider */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]"></div>

        {/* Measurements in a more sophisticated layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 max-w-4xl mx-auto opacity-0 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
          {/* Height */}
          <div className="text-center group">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 group-hover:text-gray-700 transition-colors">
              Height
            </div>
            <div className="text-2xl md:text-3xl font-light text-gray-900 group-hover:scale-110 transition-transform">
              6&apos;0&quot;
            </div>
          </div>

          {/* Chest */}
          <div className="text-center group">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 group-hover:text-gray-700 transition-colors">
              Chest
            </div>
            <div className="text-2xl md:text-3xl font-light text-gray-900 group-hover:scale-110 transition-transform">
              44.577
            </div>
          </div>

          {/* Waist */}
          <div className="text-center group">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 group-hover:text-gray-700 transition-colors">
              Waist
            </div>
            <div className="text-2xl md:text-3xl font-light text-gray-900 group-hover:scale-110 transition-transform">
              29
            </div>
          </div>

          {/* Shoe */}
          <div className="text-center group">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 group-hover:text-gray-700 transition-colors">
              Shoe
            </div>
            <div className="text-2xl md:text-3xl font-light text-gray-900 group-hover:scale-110 transition-transform">
              EU45
            </div>
          </div>

          {/* Hair */}
          <div className="text-center group">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 group-hover:text-gray-700 transition-colors">
              Hair
            </div>
            <div className="text-2xl md:text-3xl font-light text-gray-900 group-hover:scale-110 transition-transform">
              Black
            </div>
          </div>

          {/* Eyes */}
          <div className="text-center group">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 group-hover:text-gray-700 transition-colors">
              Eyes
            </div>
            <div className="text-2xl md:text-3xl font-light text-gray-900 group-hover:scale-110 transition-transform">
              Brown
            </div>
          </div>
        </div>

        {/* Enhanced Scroll indicator with text */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards]">
          <p className="lg:block hidden text-sm uppercase tracking-widest text-gray-500 mb-4 font-light">
            View Portfolio
          </p>
          <div
            className="animate-bounce cursor-pointer"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center mx-auto mb-2">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <svg
              className="w-4 h-4 text-gray-400 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
