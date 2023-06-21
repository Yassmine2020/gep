import { useRouter } from 'next/router';

export default function homesPage() {
  const router = useRouter();
  const homeName = router.query.homeName;
  return <div>hey {homeName}</div>;
}
