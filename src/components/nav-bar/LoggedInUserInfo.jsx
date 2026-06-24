import { useContext } from "react";
import { UserContext } from "../../contexts/User";

export default function LoggedInUserInfo() {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="w-12 h-12 flex items-center justify center overflow-hidden">
      <img
        src={loggedInUser.avatar_url}
        alt={loggedInUser.username}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}
