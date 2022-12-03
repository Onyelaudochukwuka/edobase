import React, { FC } from 'react';

export interface IPlaceholderInputProps {
  type: string
  placeholder: string
  name: string
  state: string
  setState: (value: string) => void
}

const PlaceholderInput: FC<IPlaceholderInputProps> = ({
  type,
  placeholder,
  name,
  state,
  setState,
  ...props
}) => (
  <input
    {...props}
    {...{
      type,
      placeholder,
      name,
      value: state,
      onChange: (e) => setState(e.target.value),
    }}
    className="border-b-2 outline-none focus:outline-none "
  />
);

export default PlaceholderInput;
