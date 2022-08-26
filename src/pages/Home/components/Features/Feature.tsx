import style from './Feature.module.css';

export interface FeatureProps {
  icon: string;
  title: string;
  content: string;
}

export const Feature = ({ icon, title, content }: FeatureProps) => (
  <div
    className={`flex flex-row items-center p-6 rounded-[20px] gap-3 ${style.feature}`}
  >
    <div className="w-[64px] h-[64px] rounded-full flex-center bg-dim-blue">
      <img
        src={icon}
        alt="feature icon"
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col gap-1">
      <h4 className="font-bold text-white text-[18px] leading-[23px]">
        {title}
      </h4>
      <p className="text-dim-white text-[16px] leading-[24px]">{content}</p>
    </div>
  </div>
);
