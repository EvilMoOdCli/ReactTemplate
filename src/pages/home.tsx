import dayjs from 'dayjs';
import {  useEffect, useState } from 'react';
import c from './home.module.scss';
import logo from '../assets/images/he.png';

export default function home() {
  const formDate = (d: number): string => {
    return dayjs(d).format('YYYY-MM-DD HH:mm:ss');
  };
  let timer: any;
  const [time, setTime] = useState(formDate(Date.now()));
  useEffect(() => {
    timer = setInterval(() => setTime(formDate(Date.now())), 1000);
    return () => clearInterval(timer);
  });
  return (
    <>
      <div className={c.layout}>
        <h1>木的react脚手架</h1>
        <img src={logo} />
        <a href="https://github.com/evilsfdd/MyTemplateByVite"></a>
        <span className="text-green-100">给个star呗</span>
        <div className={c.clock}>
          <p className={c.time}>{time}</p>
        </div>
        <div className={c.box}> 
          <h3>语言:Typescript+scss+h5</h3>
          <h3>框架：React18+React-router路由+recoil仓库+AntDesign+ahooks</h3>
          <h3>
            库：dayjs日期库+axios请求库
          </h3>
          <h3>工具：webpack5+eslint+prettier</h3>
          <h3></h3>
        </div>
      </div>
    </>
  );
}
