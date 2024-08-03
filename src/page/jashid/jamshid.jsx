import React from 'react';
import och from "../../../public/ochki.jpg"
import { Flex, Input, Select, Space, Button } from 'antd';
import { useTranslation } from 'react-i18next';
const { Option } = Select;
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const options = [
    {
        label: 'China',
        value: 'china',
        emoji: '🇨🇳',
        desc: 'China (Китай)',
    },
    {
        label: 'USA',
        value: 'usa',
        emoji: '🇺🇸',
        desc: 'USA (Америка)',
    },
    {
        label: 'Rus',
        value: 'rus',
        emoji: 'rs',
        desc: 'Rus (Россия)',
    },
    {
        label: 'Uzb',
        value: 'usb',
        emoji: 'uzb',
        desc: 'Uzb (Узб)',
    },
];
const selectBefore = (
    <Select defaultValue="http://">
        <Option value="http://">http://</Option>
    </Select>
);
const selectAfter = (
    <Select defaultValue=".com">
        <Option value=".com">.com</Option>
    </Select>
);
const { TextArea } = Input;
const onChange = (e) => {
    console.log('Change:', e.target.value);
};



export default function ContactUser() {
    const { t } = useTranslation();

    return <div className='border border-[black] m-[100px] rounded-[15px] dark:'>
        <p className='text-4xl pt-[50px] pl-[50px] md:pl-[250px] lg:pl-[300px] xl:pl-[450px] sm:pl-[10px] hover:text-[blue]'>{t("reg")}</p>
        <div className='xl:flex justify-between px-[30px] py-[10px]'>
            <div>
                <div>
                    <img className='w-[760px] xl:w-[500px] h-[330px] rounded-[15px]' src={och} alt="" />
                </div>
            </div>
            <div>
                <div className='grid grid-cols-2 gap-[20px] pt-[20px] xl:pt-[0]'>
                    <div className='w-full'>
                        <Space direction="vertical">
                            <Input addonBefore="Name"

                                style={{ width: '100%' }}
                                defaultValue="" placeholder='Alex' />
                        </Space>
                    </div>
                    <div className='w-full'>
                        <Space direction="vertical">
                            <Input addonBefore="http://"

                                style={{ width: '100%' }}
                                defaultValue="" placeholder='image' />
                        </Space>
                    </div>
                    <div className='w-full'>
                        <Space direction="vertical">
                            <Input addonBefore="Age"
                                style={{ width: '100%' }}
                                defaultValue="" type='number' placeholder='15' />
                        </Space>
                    </div>
                    <div className='w-full'>
                        <Space direction="vertical">
                            <Input type='number' addonBefore="+998"
                                style={{ width: '100%' }}
                                defaultValue="" placeholder='** *** ** **' />
                        </Space>
                    </div>
                    <div className='w-full'>
                        <Space direction="vertical">
                            <Input addonBefore="http://"
                                style={{ width: '100%' }}
                                defaultValue="" placeholder='Url' />
                        </Space>
                    </div>
                    <div className='w-full'>
                        <Space direction="vertical">
                            <Input
                                style={{ width: '100%' }}
                                addonBefore="Profession" defaultValue="" placeholder='full-stake' />
                        </Space>
                    </div>
                    <div className='w-full col-span-2'>
                        <div className='pb-[20px]'>
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Languages"
                                defaultValue={['china']}
                                onChange={handleChange}
                                options={options}
                                optionRender={(option) => (
                                    <Space>
                                        <span role="img" aria-label={option.data.label}>
                                            {option.data.emoji}
                                        </span>
                                        {option.data.desc}
                                    </Space>
                                )}
                            />
                        </div>
                        <div>
                            <Flex vertical gap={32}>
                                <TextArea
                                    showCount
                                    maxLength={200}
                                    onChange={onChange}
                                    placeholder="Write about yourself"
                                    style={{
                                        height: 120,
                                        Аresize: 'none',
                                    }}
                                />
                            </Flex>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='pl-[100px] pb-[50px] pt-[10px] sm:pl-[190px] md:pl-[320px] lg:pl-[350px] xl:pl-[770px] xl:pt-[0]'>
            <Flex gap="small" wrap>
                <Button>{t("Send")}</Button>
            </Flex>
        </div>
    </div>
}