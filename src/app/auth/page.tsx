import AuthModal from "@/components/modals/AuthModal";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function AuthPage() {
  return (
    <div className="h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-10 h-[calc(100vh-5rem)] px-8 py-8 lg:py-20">
          <h1 className="font-extrabold text-3xl lg:text-6xl md:text-4xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
            <span className="relative text-center">Level up coding skills</span>
            <span className="whitespace-nowrap relative">
              <span className="mr-3 sm:mr-4 md:mr-5">and </span>
              <span className="relative whitespace-nowrap">
                <span className="absolute bg-[#d2cbc6] -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
                <span className="relative text-[#2e1a05]">
                  quickly get a job
                </span>
              </span>
            </span>
          </h1>
          <p className="text-lg opacity-80 leading-relaxed text-center">
            LeetCode is the best platform to help you enhance your skills,
            expand your knowledge and prepare for technical interviews.
          </p>
          <div className="flex justify-center align-center gap-3">
            <div className="-space-x-5 flex overflow-hidden">
              <div className="rounded-full border-4 w-fit h-fit">
                <Image src="/avatar.png" alt="avatar" height={40} width={40} />
              </div>
              <div className="rounded-full border-4 w-fit h-fit">
                <Image src="/avatar.png" alt="avatar" height={40} width={40} />
              </div>
              <div className="rounded-full border-4 w-fit h-fit">
                <Image src="/avatar.png" alt="avatar" height={40} width={40} />
              </div>
              <div className="rounded-full border-4 w-fit h-fit">
                <Image src="/avatar.png" alt="avatar" height={40} width={40} />
              </div>
              <div className="rounded-full border-4 w-fit h-fit">
                <Image src="/avatar.png" alt="avatar" height={40} width={40} />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start gap-1">
              <div className="inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="text-base">
                <span className="font-semibold">2024</span> get a job
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
