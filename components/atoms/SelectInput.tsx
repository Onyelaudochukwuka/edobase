import React, {
  Dispatch, FC, InputHTMLAttributes, SetStateAction,
} from 'react';

export interface ISelectInputProps {
  values: string[]
  state: InputHTMLAttributes<HTMLSelectElement>['value']
  setState: Dispatch<SetStateAction<string>>
  placeholder: string
}

const SelectInput: FC<ISelectInputProps> = ({
  values, state, setState, placeholder, ...props
}) => {
  return (
    <section>
      <select
        {...props}
        placeholder={placeholder}
        value={state}
        onChange={(e) => setState(e.target.value)}
        className={`border-b-2 outline-none focus:outline-none border-action/50 focus:border-action/100 transition-colors duration-300 ease-in px-1 py-3 ${
          state === '' ? 'text-[#737070]' : 'text-inherit'
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {values.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </section>
  );
};
export default SelectInput;
