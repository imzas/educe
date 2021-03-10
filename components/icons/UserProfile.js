import { IconContext } from "react-icons";
import { FaRegUser } from "react-icons/fa";

export default function UserProfile() {
  const iconStyle = {
    size: 20,
  };
  return (
    <IconContext.Provider value={iconStyle}>
      <div>
        <FaRegUser />
      </div>
    </IconContext.Provider>
  );
}
