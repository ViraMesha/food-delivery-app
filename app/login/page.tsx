import Image from "next/image";
import Link from "next/link";

import facebookLogo from "../../public/facebook.png";
import googleLogo from "../../public/google.svg.webp";
import loginBG from "../../public/loginBg.jpeg";

const LoginPage = () => {
  return (
    <div className="p-10 h-[cal(100vh-10px)]">
      {/* BOX */}
      <div className="wrapper flex items-center justify-center">
        {/* Image container */}
        <div className="relative flex-1 w-full">
          <Image src={loginBG} alt="Login background" fill />
        </div>
        {/* Form container */}
        <div className="flex-1">
          <p>Welcome</p>
          <h1>
            Log into your account or create a new one using social buttons
          </h1>
          <button className="flex items-center gap-4 btn btn-lg ring-1 ring-yellow-200">
            <Image
              src={googleLogo}
              alt="Google logo"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex items-center gap-4 btn btn-lg ring-1 ring-blue-300">
            <Image
              src={facebookLogo}
              alt="Facebook logo"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p>
            Have a problem? <Link href="/">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
