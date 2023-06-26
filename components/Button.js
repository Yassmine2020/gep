export default function Button(props) {
  return (
    <button
      className="bg-primary-400 hover:bg-primary-600 text-white font-bold  py-2 px-4 rounded-md"
      onClick={props.onClick}>
      {props.title}
    </button>
  );
}
