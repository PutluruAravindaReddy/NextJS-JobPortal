import { fetchJobsForCandidateAction, fetchProfileAction } from "@/actions";
import Companies from "@/components/companies";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export const metadata = {
  title: 'Companies - HireSphere',
  description: 'Discover top companies hiring on HireSphere. Learn about company culture, job opportunities, and connect with potential employers.',
  twitter: {
    card: 'summary_large_image',
    title: 'Companies - HireSphere',
    description: 'Explore top companies hiring on HireSphere and find the right fit for your career.',
  },
  openGraph: {
    url: 'https://next-js-job-portal.vercel.app/companies',
    title: 'Companies - HireSphere',
    description: 'Discover top companies hiring on HireSphere. Learn about company culture, job opportunities, and connect with potential employers.',
    siteName: 'HireSphere',
  },
  metadataBase: new URL('https://next-js-job-portal.vercel.app'),
  themeColor: '#007BFF',
  keywords: ['HireSphere', 'companies', 'employers', 'job opportunities', 'company culture', 'recruitment', 'top companies', 'career growth', 'job portal'],
  robots: 'index,follow',
  authors: [{ name: 'HireSphere Team' }],
};


async function CompaniesPage() {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  if (!profileInfo) redirect("/onboard");
  const jobsList = await fetchJobsForCandidateAction({});

  return <Companies jobsList={jobsList} />;
}

export default CompaniesPage;
