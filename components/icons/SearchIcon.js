import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";

export default function SearchIcon() {
  const iconStyle = {
    size: 24,
  };
  return (
    <IconContext.Provider value={iconStyle}>
      <div>
        <MdSearch />
      </div>
    </IconContext.Provider>
  );
}
