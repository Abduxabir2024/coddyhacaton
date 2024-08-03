import './abdulaziz.scss'
import { Carousel } from 'antd';
import { Button } from "@material-tailwind/react";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
export default function Homeg() {
    return (
        <>
            <div className='flex px-[70px] '>
                <div className='w-[60%]'>
                    <p className='text-[55px] w-[80%]'>Universitet va Oquv markaz muammolarini hal qilish.</p>
                    <p className='text-[20px] pt-[30px] w-[95%]'>Juda ko'p dasturchilar hozirgi kunda  Universitet va O'quv markazlarini qidirishga qiynaladi. Biz bu mamoni ko'rib chiqdik va odamlarga qulay bo'lishi uchun WEBSITE ishlab chiqdik.</p>
                    <div className="flex w-max gap-4 pt-[20px] ">
                        <Button color="blue"><a href="http://localhost:5174/RegisteUser">Registratsiya</a></Button>
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