import { useLocation } from "react-router-dom";
import {
  ERR_MOVIES_500,
  ERR_LOGIN_400_MESSAGE,
  ERR_LOGIN_403_MESSAGE,
  ERR_LOGIN_401_MESSAGE,
  ERR_REG_400_MESSAGE,
  ERR_REG_409_MESSAGE,
  ERR_PROFILE_400_MESSAGE,
  ERR_PROFILE_409_MESSAGE,
  ERR_500_MESSAGE,
  ERR_404_MESSAGE,
} from "../../constants/ApiErrorMessage";

import "./Error.css";

function Error(props) {
  const location = useLocation();

  return (
    <span className="server-error">
      { location.pathname === "/signin" &&
        (props.errCode === 400
        ? ERR_LOGIN_400_MESSAGE
        : props.errCode === 401
        ? ERR_LOGIN_401_MESSAGE
        : props.errCode === 403
        ? ERR_LOGIN_403_MESSAGE
        : props.errCode === 404
        ? ERR_404_MESSAGE 
        : props.errCode === 500
        ? ERR_500_MESSAGE 
        : "")}
      { location.pathname === "/signup" &&
       ( props.errCode === 400
        ? ERR_REG_400_MESSAGE
        : props.errCode === 409
        ? ERR_REG_409_MESSAGE
        : props.errCode === 500
        ? ERR_500_MESSAGE 
        : "")}
      { location.pathname === "/profile" &&
        (props.errCode === 400
        ? ERR_PROFILE_400_MESSAGE
        : props.errCode === 409
        ? ERR_PROFILE_409_MESSAGE
        : props.errCode === 404
        ? ERR_404_MESSAGE 
        : props.errCode === 500
        ? ERR_500_MESSAGE 
        : "")}
      { location.pathname === "/movies" && 
        (props.errCode === 500
        ? ERR_MOVIES_500
        : "")}
    </span>
  );
}

export default Error;
