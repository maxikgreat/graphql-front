import { clsx } from 'clsx';
import { ComponentProps, FC, HTMLProps, useId } from 'react';

type SwitchProps = HTMLProps<HTMLInputElement> & {
  icons?: {
    on?: FC<ComponentProps<'svg'>>;
    off?: FC<ComponentProps<'svg'>>;
  };
};

const renderIcon = (Icon?: FC<ComponentProps<'svg'>>) =>
  Icon ? <Icon className="w-[16px]" /> : null;

export const Switch = ({
  id,
  className,
  checked,
  icons,
  ...rest
}: SwitchProps) => {
  const generatedId = useId();

  const switchId = id ?? generatedId;

  return (
    <label
      htmlFor={switchId}
      className={clsx(
        'relative border-[2px] border-secondary rounded-full w-[55px] h-[30px] bg cursor-pointer',
        className,
      )}
    >
      <input hidden type="checkbox" id={switchId} checked={checked} {...rest} />
      <div
        className={clsx(
          'flex-center absolute left-[1px] top-1/2 -translate-y-1/2 transition-transform rounded-full h-[24px] w-[24px] bg-secondary',
          {
            'translate-x-[25px]': !!checked,
          },
        )}
      >
        {!checked && renderIcon(icons?.off)}
        {!!checked && renderIcon(icons?.on)}
      </div>
    </label>
  );
};
