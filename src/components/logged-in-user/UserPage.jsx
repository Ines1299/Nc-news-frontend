import { useContext } from "react";
import { UserContext } from "../../contexts/User";

export default function UserPage() {
  const { loggedInUser } = useContext(UserContext);
  return (
    <section className="user-card">
      <h1>{loggedInUser.name}</h1>
      <h2>@{loggedInUser.username}</h2>

      <img src={loggedInUser.avatar_url} className="user-img" />
    </section>
  );
}
