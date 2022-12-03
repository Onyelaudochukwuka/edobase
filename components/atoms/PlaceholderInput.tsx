import React, { Dispatch, FC, SetStateAction } from 'react';

export interface IPlaceholderInputProps {
  type: string
  placeholder: string
  state: string
  setState: Dispatch<SetStateAction<string>>
}

const PlaceholderInput: FC<IPlaceholderInputProps> = ({
  type,
  placeholder,
  state,
  setState,
  ...props
}) => (
  <input
    {...props}
    {...{
      type,
      placeholder,
      value: state,
      onChange: (e) => setState(e.target.value),
    }}
    className="border-b-2 outline-none focus:outline-none border-action/50 focus:border-action/100 transition-colors duration-300 ease-in px-1 py-3"
  />
);

export default PlaceholderInput;
