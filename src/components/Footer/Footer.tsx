import { Links } from './Links';
import { Socials } from './Socials';
import { Logo } from '@/assets/images';
import { Container } from '@/components';

export const Footer = () => (
  <Container className="padding-x">
    <footer className="padding-y flex-center flex-col">
      <div className="flex-start md:flex-row flex-col mb-8 w-full">
        <div className="flex-1 flex flex-col justify-start mr-10 gap-4">
          <img
            src={Logo}
            alt="hoobank"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className="paragraph max-w-[312px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <Links />
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>

        <Socials />
      </div>
    </footer>
  </Container>
);
