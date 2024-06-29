import {
  createFilterCategoryAction,
  fetchJobApplicationsForCandidate,
  fetchJobApplicationsForRecruiter,
  fetchJobsForCandidateAction,
  fetchJobsForRecruiterAction,
  fetchProfileAction,
} from "@/actions";
import JobListing from "@/components/job-listing";
import { currentUser } from "@clerk/nextjs";


export const metadata = {
  title: 'Jobs - HireSphere',
  description: 'Browse through a wide range of job listings and find your perfect match on HireSphere. Apply to top companies and take the next step in your career.',
  twitter: {
    card: 'summary_large_image',
    title: 'Jobs - HireSphere',
    description: 'Explore a variety of job opportunities and apply to top companies on HireSphere.',
  },
  openGraph: {
    url: 'https://next-js-job-portal.vercel.app/jobs',
    title: 'Jobs - HireSphere',
    description: 'Browse through a wide range of job listings and find your perfect match on HireSphere. Apply to top companies and take the next step in your career.',
    siteName: 'HireSphere',
  },
  metadataBase: new URL('https://next-js-job-portal.vercel.app'),
  themeColor: '#007BFF',
  keywords: ['HireSphere', 'jobs', 'job listings', 'employment', 'career opportunities', 'job search', 'recruitment', 'job portal', 'career growth', 'top companies'],
  robots: 'index,follow',
  authors: [{ name: 'HireSphere Team' }],
};



async function JobsPage({ searchParams }) {
  console.log(searchParams, "searchParams");
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  const jobList =
    profileInfo?.role === "candidate"
      ? await fetchJobsForCandidateAction(searchParams)
      : await fetchJobsForRecruiterAction(user?.id);

  const getJobApplicationList =
    profileInfo?.role === "candidate"
      ? await fetchJobApplicationsForCandidate(user?.id)
      : await fetchJobApplicationsForRecruiter(user?.id);

  const fetchFilterCategories = await createFilterCategoryAction();

  return (
    <JobListing
      user={JSON.parse(JSON.stringify(user))}
      profileInfo={profileInfo}
      jobList={jobList}
      jobApplications={getJobApplicationList}
      filterCategories={fetchFilterCategories}
    />
  );
}

export default JobsPage;
