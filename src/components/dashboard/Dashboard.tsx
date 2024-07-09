import { useAppSelector } from "../../app/hooks";
import { getCurrentUser } from "../../features/auth.slice";

export default function Dashboard() {

  const currentUser = useAppSelector(getCurrentUser);

  return (
    <div className="appcontainer">
      <div>
        <span>Hello</span>
        {
          currentUser 
          ?
          <span>, { currentUser.user.firstname } { currentUser.user.lastname }</span> 
          :
          <span></span>
        }
      </div>
    </div>
  )
}
