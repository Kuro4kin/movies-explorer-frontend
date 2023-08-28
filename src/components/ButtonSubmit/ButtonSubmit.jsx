import "./ButtonSubmit.css"

function ButtonSubmit(props) {
  return(
    <button type="submit" disabled={props.disabled} className="button-submit">{props.text}</button>
  )
}

export default ButtonSubmit;