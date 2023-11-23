import NavLinks from "./nav-links";
import SheetCom from "./sheet";
const MobileNav = () => {
  return (
    <SheetCom>
      <NavLinks isMobile={true} />
    </SheetCom>
  );
};

export default MobileNav;
