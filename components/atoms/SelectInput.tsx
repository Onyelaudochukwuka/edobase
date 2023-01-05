import React, {
  Dispatch, FC, InputHTMLAttributes, SetStateAction,
} from 'react';

export interface ISelectInputProps {
  values: string
  state: InputHTMLAttributes<HTMLSelectElement>['value']
  setState: Dispatch<SetStateAction<string>>
  placeholder: string
}

const SelectInput: FC<ISelectInputProps> = (props) => {
  return (
    <section>
      <select
        {...props}
        className="border-b-2 outline-none focus:outline-none border-action/50 focus:border-action/100 transition-colors duration-300 ease-in px-1 py-3"
      >
        <option value="1">1</option>
      </select>
    </section>
  );
};
export default SelectInput;
