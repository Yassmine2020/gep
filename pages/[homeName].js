import { useRouter } from 'next/router';

export default function homesPage() {
  const router = useRouter();
  const homeId = router.query.homeId;
  return <div>hey {homeId}</div>;
}
