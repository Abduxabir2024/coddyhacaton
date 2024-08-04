import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation();
    return (
        <footer className=" px-[70px] flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
            <Typography color="blue-gray" className="font-normal flex items-center">
                 <img src="https://img.freepik.com/premium-vector/gw-logo_745848-61.jpg" alt="" className="w-20" />
                <h1>GRIDWORK</h1>
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        {t("home")}
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        {t("about")}
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        {t("reg")}
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        {t("Log In")}
                    </Typography>
                </li>
            </ul>
        </footer>
    );
}