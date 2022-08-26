import style from './Feedback.module.css';
import { Quotes } from '@/assets/images';

export interface FeedbackProps {
  content: string;
  name: string;
  title: string;
  img: string;
}

export const Feedback = ({ content, name, title, img }: FeedbackProps) => (
  <div
    className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] ${style.feedback}`}
  >
    <img
      src={Quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="text-[20px] leading-[32px] text-white">{name}</h4>
        <p className="text-[16px] leading-[24px] text-dim-white">{title}</p>
      </div>
    </div>
  </div>
);
