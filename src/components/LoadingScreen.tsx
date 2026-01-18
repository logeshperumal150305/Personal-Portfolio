import { useEffect, useState } from "react";
import { Fan } from "lucide-react";
import pcCaseIso from "../assets/pc-case.png";

export const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 35);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 text-white overflow-hidden">
            {/* Background Grid Effect */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: "linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    transform: "perspective(500px) rotateX(60deg) translateY(100px) scale(2)",
                }}
            />

            <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-4">
                {/* PC Case Image */}
                <div className="relative w-[40vmin] h-[40vmin] max-w-[300px] max-h-[300px] min-w-[150px] min-h-[150px] mb-8 animate-float">
                    <img
                        src={pcCaseIso}
                        alt="Gaming PC"
                        className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,0,0,0.5)]"
                    />

                    {/* Simulated Spinning Fans Overlay (Attempting to match perspective) */}

                    {/* Side Fan Top */}
                    <div className="absolute top-[28%] right-[22%] w-[18%] h-[18%] opacity-80 mix-blend-plus-lighter" style={{ transform: "skewY(-25deg)" }}>
                        <Fan className="w-full h-full text-yellow-400 animate-spin" style={{ animationDuration: '0.5s' }} />
                    </div>

                    {/* Side Fan Bottom */}
                    <div className="absolute top-[52%] right-[22%] w-[18%] h-[18%] opacity-80 mix-blend-plus-lighter" style={{ transform: "skewY(-25deg)" }}>
                        <Fan className="w-full h-full text-yellow-400 animate-spin" style={{ animationDuration: '0.6s' }} />
                    </div>

                    {/* Rear/Internal Fan */}
                    <div className="absolute top-[25%] left-[35%] w-[15%] h-[15%] opacity-60 mix-blend-overlay" style={{ transform: "skewY(10deg)" }}>
                        <Fan className="w-full h-full text-yellow-500 animate-spin" style={{ animationDuration: '0.4s' }} />
                    </div>
                </div>

                {/* Loading Text & Fan Icon */}
                <div className="flex items-center gap-2 sm:gap-4 mb-4">
                    <Fan className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 animate-spin" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 whitespace-nowrap">
                        SYSTEM BOOTING
                    </h2>
                    <Fan className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 animate-spin" style={{ animationDirection: 'reverse' }} />
                </div>

                {/* Progress Bar */}
                <div className="w-[70%] max-w-[400px] h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                    <div
                        className="h-full bg-gradient-to-r from-red-600 to-yellow-500 transition-all duration-75 shadow-[0_0_10px_rgba(255,0,0,0.8)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="mt-2 text-xs sm:text-sm text-gray-400 font-mono font-bold">
                    AH SHIT..! HERE WE GO AGAIN: {progress}%
                </div>
            </div>
        </div>
    );
};
