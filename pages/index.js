var myHeaders = new Headers();
myHeaders.append(
  'Authorization',
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZ3NicCIsInJvbGUiOiJlZGl0b3IiLCJleHAiOjE2ODg2MzgzMTd9.K5ZQzngFINuZWLjljxIyKmLL0eOTSAKuztiHOu6Pjhs'
);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

fetch(
  'http://192.168.100.244:8080/devman/devicelist?house=sunimplant',
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));

export default function HomePage() {
  return <div>This is the HomePage</div>;
}
