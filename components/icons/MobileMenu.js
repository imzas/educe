import { IconContext } from "react-icons";
import { CgMenuLeft } from "react-icons/cg";

export default function MobileMenu() {
  const iconStyle = {
    color: "red",
    size: 24,
  };
  return (
    <IconContext.Provider value={iconStyle}>
      <div>
        <CgMenuLeft />
      </div>
    </IconContext.Provider>
  );
}
