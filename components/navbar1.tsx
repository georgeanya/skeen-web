import skeen from "../public/assets/skeen.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

const SkeenButton = styled(Button)({
  background: "#3E7EEE !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "14px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
});

const Navbar = () => {
  return (
    <div>
      <div className="px-5 md:px-[125px] py-[23px] md:py-[35px] ">
        <nav>
          <div className="container flex flex-wrap  justify-center items-center mx-auto">
            <Link href="/" className="flex self-center">
              <img
                src={skeen.src}
                className="mr-3  self-center"
                alt="Skeen health logo"
              />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
