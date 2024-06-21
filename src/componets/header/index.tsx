import { FaUser } from "react-icons/fa";
import "./style.scss";

export const Header = () => {
  return (
    <div>
      <div className="header header-black">
        <div className="container-80">
          <text className="titleQuali">QualiFlix</text>
          <div className="user-ico"><FaUser /></div>
        </div>
      </div>
    </div>
  );
};
