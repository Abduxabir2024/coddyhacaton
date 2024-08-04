import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../page/language/lang";


export default function Navbar() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex items-center justify-between mx-14">

        <div className="logo flex items-center ">
          <img src="https://img.freepik.com/premium-vector/gw-logo_745848-61.jpg" alt="" className="w-20" />
          <h1>GRIDWORK</h1>
        </div>
        <div className="ul flex items-center gap-10">
          <Link className="hover:text-blue-800 hover:font-bold" to={"/home"}>{t("home")}</Link>
          <Link className="hover:text-blue-800 hover:font-bold" to={"/RegisteUser"}>{t("reg")}</Link>
          <Link className="hover:text-blue-800 hover:font-bold" to={"/About"}>{t("about")}</Link>
          <Link className="hover:text-blue-800 hover:font-bold" to={"/Login"}>{t("Log In")}</Link>
        </div>
        <div className="flex gap-[30px]">
          <LanguageSwitcher />
          <Button><Link to={"Login"}>{t("Log In")}</Link></Button>
        </div>
      </div>
    </>
  )
}