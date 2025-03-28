"use client";
import AiEducationSection from "@/components/ai-education-section";
import DraggableText from "@/components/DraggableText";
import Header from "@/components/Header";
import MemeGenerator from "@/components/MemeGenerator";
import Navbar from "@/components/navbar";
import ReelSyncUploader from "@/components/ReelSyncUploader";
import RobotScrollScene from "@/components/robot-scroll-screen";
import EnhancedScriptToVideo from "@/components/ScriptToVideoSection";
import ScriptToVideoSection from "@/components/ScriptToVideoSection";
import ThumbnailGenerator from "@/components/thumbnail-generator";
import EnhancedVideoCarousel from "@/components/video-carousel";
import VideoCarousel from "@/components/videoCarousel";
import { useEffect, useState } from "react";

const Page = () => {
  // State to track mouse position for subtle background effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effect for the parallax mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Futuristic animated background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, rgba(76, 29, 149, 0.15), rgba(17, 24, 39, 0))`,
          transition: "background 0.5s ease-out",
        }}
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-black"></div>

        {/* Ambient glow */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_rgba(93,63,211,0.2),transparent_70%)]"></div>

        {/* Grid overlay with animated pulse */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(66, 153, 225, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(66, 153, 225, 0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
            animation: "pulse 15s ease-in-out infinite",
          }}
        ></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/10"
              style={{
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 10 + 20}s linear infinite`,
                opacity: Math.random() * 0.5,
                boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
              }}
            />
          ))}
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-purple-900/10 to-transparent"></div>
      </div>

      {/* Content wrapper with subtle parallax effect */}
      <div
        className="relative z-10 flex flex-col min-h-screen text-white"
        style={{
          transform: `translate(${mousePosition.x * -10}px, ${
            mousePosition.y * -10
          }px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <Header />

        {/* Main content with hover effects */}
        <div className="container mx-auto px-4 pt-20">
          <div className="text-7xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-center animate-fadeIn drop-shadow-lg mb-5">
            <DraggableText text="AI-Powered!  " />
          </div>

          <div className="text-6xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-center animate-fadeIn drop-shadow-lg mt-8 mb-4">
            Creativity: Edit, Generate & Analyze!
          </div>

          <div className="text-xl md:text-2xl font-semibold text-blue-100/80 text-center animate-fadeIn mb-20">
            A one stop solution for everything
          </div>

          {/* Card with advanced hover effect */}
          <section className="group relative max-w-6xl h-[650px] mx-auto mb-20 rounded-2xl overflow-hidden">
            {/* Card backdrop with hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-black/90 backdrop-blur-sm rounded-2xl border border-slate-800/50 transition-all duration-500 group-hover:border-blue-500/30 group-hover:bg-slate-900/80">
              {/* Inner highlight effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),transparent_60%)]"></div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
            </div>

            {/* Card content */}
            <div className="relative z-10 p-8 h-full">
              <EnhancedVideoCarousel />
            </div>

            {/* Animated border glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 border border-blue-500/20 rounded-2xl"></div>
          </section>

          {/* Main content sections */}
          <main className="relative z-10 flex flex-col items-center w-full min-h-screen py-14">
            <div className="w-full space-y-32">
              <div className="relative">
                <main className="min-h-screen py-12">
                  <div className="container mx-auto px-4">
                    <EnhancedScriptToVideo
                      script="Generate a futuristic cityscape with flying cars, holographic billboards, and neon lights reflecting off glass skyscrapers. The scene should be set at night with a cyberpunk aesthetic."
                      videoSrc="/videos/hero.mp4"
                      staticVideoSrc="/videos/frame.mp4"
                    />
                  </div>
                </main>
              </div>

              <div className="relative hover:scale-[1.02] transition-transform duration-700">
                <ReelSyncUploader />
              </div>

              <div className="relative hover:scale-[1.02] transition-transform duration-700">
                <MemeGenerator />
              </div>

              <div className="relative hover:scale-[1.02] transition-transform duration-700">
                <ThumbnailGenerator />
              </div>

              <div className="relative hover:scale-[1.02] transition-transform duration-700">
                <AiEducationSection />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Global animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-30px) translateX(15px);
          }
          50% {
            transform: translateY(-15px) translateX(30px);
          }
          75% {
            transform: translateY(-40px) translateX(15px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.1;
            background-size: 100px 100px;
          }
          50% {
            opacity: 0.15;
            background-size: 110px 110px;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Page;
