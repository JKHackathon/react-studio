// TODO: create a component that displays a single bakery item
export default function DisplaysItem(props) {
  return (
    <div
      class="BakeryItem"
      onClick={() =>
        props.addToCart({
          img: props.image,
          name: props.name,
          price: props.price,
        })
      }
    >
      <img src={props.image}></img>
      <div class="BakeryItemDetails">
        <p>
          <strong>{props.name}</strong>
        </p>
        <p>
          <i>{props.description}</i>
        </p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}
