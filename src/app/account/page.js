import { fetchProfileAction } from "@/actions";
import AccountInfo from "@/components/account-info";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'Account - HireSphere',
  description: 'Manage your HireSphere account. Update your profile, view application history, and customize your job search preferences.',
  twitter: {
    card: 'summary_large_image',
    title: 'Account - HireSphere',
    description: 'Update your profile, view application history, and customize your job search preferences on your HireSphere account.',
  },
  openGraph: {
    url: 'https://next-js-job-portal.vercel.app/account',
    title: 'Account - HireSphere',
    description: 'Manage your HireSphere account. Update your profile, view application history, and customize your job search preferences.',
    siteName: 'HireSphere',
  },
  metadataBase: new URL('https://next-js-job-portal.vercel.app'),
  themeColor: '#007BFF',
  keywords: ['HireSphere', 'account', 'profile', 'application history', 'job search preferences', 'job portal', 'career management', 'recruitment'],
  robots: 'index,follow',
  authors: [{ name: 'HireSphere Team' }],
};


async function AccountPage() {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);
  if (!profileInfo) redirect("/onboard");
  return <AccountInfo profileInfo={profileInfo} />;
}

export default AccountPage;
