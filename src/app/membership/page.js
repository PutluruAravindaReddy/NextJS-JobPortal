import { fetchProfileAction } from "@/actions";
import Membership from "@/components/membership";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'Membership - HireSphere',
  description: 'Explore our membership plans and gain access to exclusive job listings, advanced job search tools, and career development resources on HireSphere.',
  twitter: {
    card: 'summary_large_image',
    title: 'Membership - HireSphere',
    description: 'Join HireSphere as a member to access exclusive job listings, advanced job search tools, and career development resources.',
  },
  openGraph: {
    url: 'https://next-js-job-portal.vercel.app/membership',
    title: 'Membership - HireSphere',
    description: 'Explore our membership plans and gain access to exclusive job listings, advanced job search tools, and career development resources on HireSphere.',
    siteName: 'HireSphere',
  },
  metadataBase: new URL('https://next-js-job-portal.vercel.app'),
  themeColor: '#007BFF',
  keywords: ['HireSphere', 'membership', 'job portal', 'exclusive job listings', 'career development', 'job search tools', 'recruitment', 'job board', 'career growth'],
  robots: 'index,follow',
  authors: [{ name: 'HireSphere Team' }],
};



async function MembershipPage() {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);
  if (!profileInfo) redirect("/onboard");

  return <Membership profileInfo={profileInfo} />;
}

export default MembershipPage;
