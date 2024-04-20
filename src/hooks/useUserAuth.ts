import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';

const useUserAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/problems-list");
    if (!loading && !user) setPageLoading(false);
  }, [loading, router, user]);

  return { user, pageLoading, error };
};

export default useUserAuth;
