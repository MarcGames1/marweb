import React from 'react'
import Buttons from '../Buttons';

const Primary = () => {
  return (
    <div className="flex gap-5 items-center justify-items-center self-center">
      <Buttons.Calendly />
      <Buttons.Whatsapp />
    </div>
  );
}

export default Primary