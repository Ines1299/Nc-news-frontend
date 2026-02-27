import { useContext } from "react";
import { UserContext } from "../contexts/User";

export default function LoggedInUserInfo() {
  const { loggedInUser } = useContext(UserContext);
  return <img src={loggedInUser.avatar_url} className="user-img" />;
}
