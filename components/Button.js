export default function Button(props) {
  return (
    <button
      className="bg-primary-600 hover:bg-primary-700 capitalize transition ease-in-out duration-500 text-white font-bold  py-2 px-4 rounded-md"
      onClick={props.onClick}>
      {props.title}
    </button>
  );
}
