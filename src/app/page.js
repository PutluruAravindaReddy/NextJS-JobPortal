import { fetchProfileAction } from "@/actions";
import HomepageButtonControls from "@/components/homepage-button-controls";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Fragment } from "react";

export const metadata = {
  title: 'Home - HireSphere',
  description: 'Discover job opportunities and connect with top employers on HireSphere, your ultimate job portal for career growth and success.',
  twitter: {
    card: 'summary_large_image',
    title: 'HireSphere - Your Ultimate Job Portal',
    description: 'Join HireSphere to find the best job opportunities and connect with leading companies.',
    images: ['/img/Logo/hiresphere_logo.svg'],
  },
  openGraph: {
    url: 'https://next-js-job-portal.vercel.app',
    title: 'Home - HireSphere',
    description: 'Discover job opportunities and connect with top employers on HireSphere, your ultimate job portal for career growth and success.',
    images: [
      {
        url: '/img/Logo/hiresphere_logo.svg',
        width: 800,
        height: 600,
        alt: 'HireSphere Logo',
      },
    ],
    siteName: 'HireSphere',
  },
  metadataBase: new URL('https://next-js-job-portal.vercel.app'),
  themeColor: '#007BFF',
  keywords: ['HireSphere', 'job portal', 'job search', 'career opportunities', 'employment', 'job listings', 'recruitment', 'job board', 'career growth'],
  robots: 'index,follow',
  authors: [{ name: 'HireSphere Team' }],
};





async function Home() {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  if (user && !profileInfo?._id) redirect("/onboard");

  return (
    <Fragment>
      <section className="relative w-full h-full min-h-screen pb-10">
        <div className="w-full h-full relative">
          <div className="flex flex-col-reverse lg:flex-row gap-10 mt-16">
            <section className="w-full lg:w-[50%] flex flex-col md:px-2 lg:px-0 p-5 lg:p-10">
              <div className="w-full flex justify-start flex-col h-auto lg:pt-7">
                <span className="flex space-x-2">
                  <span className="block w-14 mb-2 dark:border-white border-b-2 border-gray-700"></span>
                  <span className="font-medium dark:text-white text-gray-600">
                    One Stop Solution to Find Jobs
                  </span>
                </span>
                <h1 className="text-3xl dark:text-white mt-5 lg:text-7xl text-black font-extrabold">
                  Build your best job community starting from here.
                </h1>
                <div className="w-full mt-6 flex items-center text-white justify-start gap-2">
                  <HomepageButtonControls
                    user={JSON.parse(JSON.stringify(user))}
                    profileInfo={profileInfo}
                  />
                </div>
              </div>
            </section>
            <section className="relative w-full lg:w-[50%] flex items-center justify-end">
              <img
                src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
                alt="Hero"
                className="h-full w-full object-contain z-10"
              />
            </section>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
