export const getStaticProps = async () => {
  const res = await fetch(
    'http://192.168.100.244:8080/devman/devicelist?house=sunimplant'
  );
  const homeData = await res.json();
  return {
    props: { homeData: homeData },
  };
};

export default function HomePage({ homeDatas }) {
  return console.log({ homeDatas });
}
