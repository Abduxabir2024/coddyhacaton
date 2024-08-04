import './abdulaziz.scss'
import { Carousel } from 'antd';
import { Button } from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
export default function Homeg() {
    const { t } = useTranslation();
    return (
        <>
            <div className='flex px-[70px] '>
                <div className='w-[60%]'>
                    <p className='text-[55px] w-[80%]'>{t("It")}</p>
                    <p className='text-[20px] pt-[30px] w-[95%]'>{t("J")}</p>
                    <div className="flex w-max gap-4 pt-[20px] ">
                        <Button color="blue"><a href="http://localhost:5174/RegisteUser">{t("regi")}</a></Button>
                    </div>
                </div>
                <div className='w-[40%] '>
                    <Carousel autoplay>
                        <div>
                        <img src="./itjamo.webp" alt="" />
                        </div>
                        <div>
                            <img src="./teamm.webp" alt="" />
                        </div>
                        <div>
                            <img src="./te.jpg" alt="" />
                        </div>
                        <div>
                            <img src="./itm.webp" alt="" />
                        </div>
                    </Carousel>
                </div>

            </div>
        </>
    )
}