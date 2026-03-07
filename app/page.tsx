"use client"
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import Link from "next/link";
import { useEffect,  useState } from "react";
import { auth } from "@/shared/firebase/firebaseapi";
import { usePathname, useRouter } from "next/navigation";
import nextConfig from "@/next.config";

export default function Home() {

    let {basePath} = nextConfig;
  const [passwordshow1, setpasswordshow1] = useState(false);

  const [err, setError] = useState("");
  const [data, setData] = useState({
      "email": "adminnextjs@gmail.com",
      "password": "1234567890",
  });
  const { email, password } = data;
  const changeHandler = (e: any) => {
      setData({ ...data, [e.target.name]: e.target.value });
      setError("");
  };
  const Login = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(email, password).then(
          user => { console.log(user); RouteChange(); }).catch(err => { setError(err.message); });
  };

  const Login1 = (_e: any) => {
      if (data.email == "adminnextjs@gmail.com" && data.password == "1234567890") {
          RouteChange();
      }
      else {
          setError("The Auction details did not Match");
          setData({
              "email": "adminnextjs@gmail.com",
              "password": "1234567890",
          });
      }
  };
  const router = useRouter();
  const RouteChange = () => {
      let path = "/dashboard/sales";
      router.push(path);
  };

  const pathname = usePathname();

 // Track the background class in state
 const [backgroundClass, setBackgroundClass] = useState("");

 useEffect(() => {
   if (pathname === "/") {
     setBackgroundClass("authentication-background");
   } else {
     setBackgroundClass("");
   }
 }, [pathname]);

  return (
   <html>
    <body className={`${backgroundClass}`}>
    <div className="container">
        <div className="grid grid-cols-12 justify-center items-center authentication authentication-basic h-full">
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12">
                <div className="box my-4">
                  
                  <nav className="!block firebase-data mt-6 bg-light mx-auto p-2 rounded-md" aria-label="Tabs" role='tablist'>
                      <div className="flex justify-center space-x-2  rtl:space-x-reverse">
                          <SpkButton buttontype="button" customClass="hs-tab-active:bg-primary hs-tab-active:text-white py-2 px-2 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-sm hover:text-primary  dark:text-white/70 dark:hover:text-white active"
                            Id="pills-with-brand-color-item-1" Tab="#pills-with-brand-color-01" Controls="pills-with-brand-color-01">
                              <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/nextjs.png`} alt="user-img" className="w-6 h-6 rounded-full ring-0" />
                          </SpkButton>
                          <SpkButton buttontype="button" customClass="hs-tab-active:bg-primary hs-tab-active:text-white py-2 px-2 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-sm hover:text-primary  dark:text-white/70 dark:hover:text-white" 
                            Id="pills-with-brand-color-item-2" Tab="#pills-with-brand-color-02" Controls="pills-with-brand-color-02">
                              <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/firbase.png`} alt="user-img" className="w-6 h-6 rounded-full ring-0" />
                          </SpkButton>
                      </div>
                  </nav>
                    <div className="box-body !p-[3rem]" role="tabpanel" id="pills-with-brand-color-01" aria-labelledby="pills-with-brand-color-item-1">
                        <div className="mb-3 flex justify-center">
                            <Link href="/dashboard/sales">
                                <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-logo.png`} alt="logo" className="desktop-logo"/>
                                <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-white.png`} alt="logo" className="desktop-white"/>
                            </Link>
                        </div>
                        <p className="h5 mb-2 text-center">Sign In</p>
                        <p className="mb-4 text-textmuted dark:text-textmuted/50 opacity-70 font-normal text-center">Welcome back Henry !</p>
                        <div className="flex mb-3 justify-between gap-2 flex-wrap flex-lg-nowrap">
                            <SpkButton Size="lg" customClass="ti-btn border border-defaultborder dark:border-defaultborder/10 flex items-center justify-center flex-auto bg-light">
                                <span className="avatar avatar-xs flex-shrink-0">
                                    <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/media/apps/google.png`} alt=""/>
                                </span>
                                <span className="leading-[1.2rem] ms-2 text-[13px] text-defaulttextcolor">Signup with Google</span>
                            </SpkButton>
                        </div>
                        <div className="text-center my-3 authentication-barrier">
                            <span>OR</span>
                        </div>
                        <div className="grid grid-cols-12 gap-y-3">
                             <div className="xl:col-span-12 col-span-12">
                                 {err && <div className="alert-danger px-4 py-3 shadow-md mb-2" role="alert">
                                      <div className="flex">
                                          <div className="py-1">
                                          </div>
                                          <div>{err}</div>
                                      </div>
                                  </div>}
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <label htmlFor="signin-username" className="form-label text-defaulttextcolor">User Name<sup className="text-xs text-danger">*</sup></label>
                                <input type="text" className="form-control" id="signin-username" placeholder="user name" defaultValue={email}
                                                                onChange={changeHandler}  />
                            </div>
                            <div className="xl:col-span-12 col-span-12 mb-2">
                                <label htmlFor="signin-password" className="form-label text-defaulttextcolor block">Password<sup className="text-xs text-danger">*</sup><Link scroll={false} href="/authentication/reset-password/basic" className="float-end font-normal text-textmuted dark:text-textmuted/50">Forget password ?</Link></label>
                                <div className="relative">
                                    <input type={(passwordshow1) ? 'text' : "password"} defaultValue={password} onChange={changeHandler} className="form-control create-password-input" id="signin-password" placeholder="password"/>
                                    <Link href="#!" onClick={() => setpasswordshow1(!passwordshow1)} className="show-password-button text-textmuted dark:text-textmuted/50" id="button-addon2">
                                       <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                    </Link>
                                </div>
                                <div className="mt-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1"/>
                                        <label className="form-check-label text-textmuted dark:text-textmuted/50 font-normal" htmlFor="defaultCheck1">
                                            Remember password ?
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid mt-4">
                            <Link href="/dashboard/sales" className="ti-btn ti-btn-primary"  onClick={Login1}>Sign In</Link>
                        </div>
                        <div className="text-center">
                            <p className="text-textmuted dark:text-textmuted/50 mt-3 mb-0">Dont have an account? <Link href="/authentication/sign-up/basic" className="text-primary">Sign Up</Link></p>
                        </div>
                        <div className="btn-list text-center mt-3">
                            <SpkButton variant="soft-primary" customClass="ti-btn ti-btn-icon btn-wave">
                                <i className="ri-facebook-line leading-none align-center text-[17px]"></i>
                            </SpkButton>
                            <SpkButton variant="soft-primary1" customClass="ti-btn ti-btn-icon btn-wave">
                                <i className="ri-twitter-x-line leading-none align-center text-[17px]"></i>
                            </SpkButton>
                            <SpkButton variant="soft-primary2" customClass="ti-btn ti-btn-icon btn-wave">
                                <i className="ri-instagram-line leading-none align-center text-[17px]"></i>
                            </SpkButton>
                        </div>
                    </div>
                    <div className="box-body !p-[3rem] hidden" role="tabpanel" id="pills-with-brand-color-02" aria-labelledby="pills-with-brand-color-item-2">
                        <div className="mb-3 flex justify-center">
                            <Link href="/dashboard/sales">
                                <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-logo.png`} alt="logo" className="desktop-logo"/>
                                <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-white.png`} alt="logo" className="desktop-white"/>
                            </Link>
                        </div>
                        <p className="h5 mb-2 text-center">Sign In</p>
                        <p className="mb-4 text-textmuted dark:text-textmuted/50 opacity-70 font-normal text-center">Welcome back Henry !</p>
                        <div className="flex mb-3 justify-between gap-2 flex-wrap flex-lg-nowrap">
                            <SpkButton Size="lg" customClass="ti-btn border border-defaultborder dark:border-defaultborder/10 flex items-center justify-center flex-auto bg-light">
                                <span className="avatar avatar-xs flex-shrink-0">
                                    <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/media/apps/google.png`} alt=""/>
                                </span>
                                <span className="leading-[1.2rem] ms-2 text-[13px] text-defaulttextcolor">Signup with Google</span>
                            </SpkButton>
                        </div>
                        <div className="text-center my-3 authentication-barrier">
                            <span>OR</span>
                        </div>
                        <div className="grid grid-cols-12 gap-y-3">
                            <div className="xl:col-span-12 col-span-12">
                                 {err && <div className="alert-danger px-4 py-3 shadow-md mb-2" role="alert">
                                      <div className="flex">
                                          <div className="py-1">
                                          </div>
                                          <div>{err}</div>
                                      </div>
                                  </div>}
                            </div>
                                
                            <div className="xl:col-span-12 col-span-12">
                                <label htmlFor="signin-username1" className="form-label text-defaulttextcolor">User Name<sup className="text-xs text-danger">*</sup></label>
                                <input type="text" className="form-control" id="signin-username1" placeholder="user name"  defaultValue={email} onChange={changeHandler}/>
                            </div>
                            <div className="xl:col-span-12 col-span-12 mb-2">
                                <label htmlFor="signin-password1" className="form-label text-defaulttextcolor block">Password<sup className="text-xs text-danger">*</sup><Link scroll={false} href="/authentication/reset-password/basic" className="float-end font-normal text-textmuted dark:text-textmuted/50">Forget password ?</Link></label>
                                <div className="relative">
                                    <input type={(passwordshow1) ? 'text' : "password"}  defaultValue={password} onChange={changeHandler} className="form-control create-password-input" id="signin-password1" placeholder="password"/>
                                    <Link href="#!" onClick={() => setpasswordshow1(!passwordshow1)} className="show-password-button text-textmuted dark:text-textmuted/50" id="button-addon2">
                                       <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                    </Link>
                                </div>
                                <div className="mt-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1"/>
                                        <label className="form-check-label text-textmuted dark:text-textmuted/50 font-normal" htmlFor="defaultCheck1">
                                            Remember password ?
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid mt-4">
                            <Link href="/dashboard/sales" className="ti-btn ti-btn-primary" onClick={Login}>Sign In</Link>
                        </div>
                        <div className="text-center">
                            <p className="text-textmuted dark:text-textmuted/50 mt-3 mb-0">Dont have an account? <Link href="/authentication/sign-up/basic" className="text-primary">Sign Up</Link></p>
                        </div>
                        <div className="btn-list text-center mt-3">
                            <SpkButton variant="soft-primary" customClass="ti-btn ti-btn-icon btn-wave">
                                <i className="ri-facebook-line leading-none align-center text-[17px]"></i>
                            </SpkButton>
                            <SpkButton variant="soft-primary1" customClass="ti-btn ti-btn-icon btn-wave">
                                <i className="ri-twitter-x-line leading-none align-center text-[17px]"></i>
                            </SpkButton>
                            <SpkButton variant="soft-primary2" customClass="ti-btn ti-btn-icon btn-wave">
                                <i className="ri-instagram-line leading-none align-center text-[17px]"></i>
                            </SpkButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
        </div>
    </div>
    </body>
   </html>
  );
}
