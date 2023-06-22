import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function homesPage() {
  const router = useRouter();
  const houseName = router.query.houseName;
  console.log(houseName);
  const [houseData, setHouseData] = useState(null);

  useEffect(() => {
    // fetch('/api/fetchHouseDevices?houseName=houseName')
    fetch(`/api/fetchHouseDevices?houseName=${houseName}`)
      // fetch('/api/fetchHouseDevices')
      .then((response) => response.json())
      .then((houseData) => {
        setHouseData(houseData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [houseName]);

  return (
    <div>
      {houseData ? <div>{JSON.stringify(houseData)}</div> : <div>Loading</div>}
    </div>
  );
}
