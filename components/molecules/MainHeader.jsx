import Image from "next/image";
import logo from "../../public/Frame 732.png";
const MainHeader = () => {
  return (
    <div className="main-header">
      <div>
        <Image src={logo} alt="tan-logo" />
      </div>
      <div>
        <input type="text" />
      </div>
      <div>login</div>
    </div>
  );
};

export default MainHeader;
