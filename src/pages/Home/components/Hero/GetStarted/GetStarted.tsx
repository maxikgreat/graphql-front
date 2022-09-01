import style from './GetStarted.module.css';
import { Paragraph } from './Paragraph';
import { ArrowUp } from '@/assets/images';

export const GetStarted = () => (
  <div
    className={`relative flex-center w-[140px] h-[140px] rounded-full bg-secondary-gradient p-[2px] cursor-pointer ${style['water-wave']}`}
  >
    <div className="flex-center flex-col bg w-full h-full rounded-full">
      <div className="flex-start flex-row gap-2">
        <Paragraph>Get</Paragraph>
        <img
          src={ArrowUp}
          className="w-[23px] h-[23px] object-contain"
          alt="link"
        />
      </div>
      <Paragraph>Started</Paragraph>
    </div>
  </div>
);
