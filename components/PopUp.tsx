import React, { FC } from 'react';

import { Email } from '../assets';

export interface IPopUpProps {
  show: boolean
}

const PopUp: FC<IPopUpProps> = ({
  show,
}) => {
  return (
    <section className={`${
      show ? 'scale-100' : 'scale-0'
    } fixed inset-0 z-50 flex h-screen w-full origin-center flex-col items-center justify-center bg-black/70 transition-[transform] duration-500 ease-in`}
    >
      <div className="bg-white w-10/12 py-4 px-6 flex flex-col items-center justify-center">
        <div>
          <Email className="w-36 h-36" />
        </div>
        <p>Please Check Your Email, a confirmation mail has been sent</p>
      </div>
    </section>
  );
};
export default PopUp;
