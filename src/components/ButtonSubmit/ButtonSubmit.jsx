import "./ButtonSubmit.css"

function ButtonSubmit(props) {
  return(
    <button type="submit" className="button-submit" onClick={props.onClick}>{props.text}</button>
  )
}

export default ButtonSubmit;