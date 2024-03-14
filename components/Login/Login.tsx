import Image from "next/image";
import Link from "next/link";

import facebookLogo from "../../public/facebook.png";
import googleLogo from "../../public/google.svg.webp";
import loginBG from "../../public/loginBg.jpeg";

export const Login = () => {
  return (
    <section className="p-10 h-[calc(100vh-6rem)] lg:h-[calc(100vh-7.6rem)] flex items-center justify-center">
      {/* BOX */}
      <div className="wrapper h-full shadow-2xl rounded-md flex flex-col md:flex-row  md:w-full xl:w-[60%] 2xl:w-1/2">
        {/* Image container */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2 lg:w-[60%]">
          <Image
            src={loginBG}
            alt="Login background"
            fill
            className="object-cover"
          />
        </div>
        {/* Form container */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <p className="font-bold text-xl xl:text-3xl">Welcome</p>
          <h1>
            Log into your account or create a new one using social buttons
          </h1>
          <button className="flex items-center justify-start gap-4 btn btn-lg ring-1 ring-gray-200 w-fit md:w-full">
            <Image
              src={googleLogo}
              alt="Google logo"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="sm:whitespace-nowrap">Sign in with Google</span>
          </button>
          <button className="flex items-center justify-start gap-4 btn btn-lg ring-1 ring-gray-200 w-fit md:w-full">
            <Image
              src={facebookLogo}
              alt="Facebook logo"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="sm:whitespace-nowrap">Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?{" "}
            <Link href="/" className="underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
