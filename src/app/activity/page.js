import {
  fetchJobApplicationsForCandidate,
  fetchJobsForCandidateAction,
} from "@/actions";
import CandidateActivity from "@/components/candidate-activity";
import { currentUser } from "@clerk/nextjs";


export const metadata = {
  title: 'Activity - HireSphere',
  description: 'Track your job application activity on HireSphere. View the status of your applications and see which companies you have applied to.',
  twitter: {
    card: 'summary_large_image',
    title: 'Activity - HireSphere',
    description: 'Monitor your job application progress on HireSphere and stay updated with the status of your applications to various companies.',
  },
  openGraph: {
    url: 'https://next-js-job-portal.vercel.app/activity',
    title: 'Activity - HireSphere',
    description: 'Track your job application activity on HireSphere. View the status of your applications and see which companies you have applied to.',
    siteName: 'HireSphere',
  },
  metadataBase: new URL('https://next-js-job-portal.vercel.app'),
  themeColor: '#007BFF',
  keywords: ['HireSphere', 'activity', 'job applications', 'application status', 'applied companies', 'job portal', 'career tracking', 'recruitment', 'job search'],
  robots: 'index,follow',
  authors: [{ name: 'HireSphere Team' }],
};



export default async function Activity() {
  const user = await currentUser();
  const jobList = await fetchJobsForCandidateAction();
  const jobApplicants = await fetchJobApplicationsForCandidate(user?.id);

  return <CandidateActivity jobList={jobList} jobApplicants={jobApplicants} />;
}
