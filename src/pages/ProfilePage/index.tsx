import KlinikaProfilePage from "./Klinika";
import UserProfilePage from "./User";

export default function ProfilePage() {
  return <div>{false ? <UserProfilePage /> : <KlinikaProfilePage />}</div>;
}
