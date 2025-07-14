export default function TabButtons(props) {
 
    function handleClick() {
        console.log(`Tab clicked: ${props.children}`);
    }

  return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
  );
}
