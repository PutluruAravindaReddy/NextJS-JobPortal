import { fetchProfileAction } from "@/actions";
import OnBoard from "@/components/on-board";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export const metadata= {
  title: 'OnBoard - HireSphere',
  description: 'Get started with HireSphere and find your dream job. Create an account, complete your profile, and start applying to top companies.',
  twitter: {
    card: 'summary_large_image',
    title: 'OnBoard - HireSphere',
    description: 'Join HireSphere to find your dream job. Complete your profile and start connecting with top employers.',
    images: ['/img/Logo/hiresphere_logo.svg'],
  },
  openGraph: {
    url: 'https://next-js-job-portal.vercel.app/onboard',
    title: 'OnBoard - HireSphere',
    description: 'Get started with HireSphere and find your dream job. Create an account, complete your profile, and start applying to top companies.',
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
  keywords: ['HireSphere', 'job portal', 'onboarding', 'job search', 'career opportunities', 'employment', 'job listings', 'recruitment', 'job board', 'career growth'],
  robots: 'index,follow',
  authors: [{ name: 'HireSphere Team' }],
};



async function OnBoardPage() {
  //get the auth user from clerk
  const user = await currentUser();

  //fetch the profile info -> either user is candidate / user is recruiter
  const profileInfo = await fetchProfileAction(user?.id);

  if (profileInfo?._id) {
    if (profileInfo?.role === "recruiter" && !profileInfo.isPremiumUser)
      redirect("/membership");
    else redirect("/");
  } else return <OnBoard />;
}

export default OnBoardPage;
