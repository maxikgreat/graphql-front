const stats = [
  {
    id: 'stats-1',
    title: 'User Active',
    value: '3800+',
  },
  {
    id: 'stats-2',
    title: 'Trusted by Company',
    value: '230+',
  },
  {
    id: 'stats-3',
    title: 'Transaction',
    value: '$230M+',
  },
];

export const Stats = () => (
  <div className="flex-center flex-row flex-wrap sm:mb-20 mb-6">
    {stats.map(({ id, value, title }) => (
      <div key={id} className="flex flex-1 justify-start items-center gap-3">
        <h4 className="font-bold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {value}
        </h4>
        <p className="xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase">
          {title}
        </p>
      </div>
    ))}
  </div>
);
