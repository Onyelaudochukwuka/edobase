import React, {
  Dispatch,
  InputHTMLAttributes,
  ReactElement,
  SetStateAction,
} from 'react';

interface IPlaceholderInputProps<T> {
  type: InputHTMLAttributes<HTMLInputElement>['type']
  placeholder: InputHTMLAttributes<HTMLInputElement>['placeholder']
  state: InputHTMLAttributes<HTMLInputElement>['value']
  setState: Dispatch<SetStateAction<T>>
  inputMode: InputHTMLAttributes<HTMLInputElement>['inputMode']
}

const PlaceholderInput = <T extends unknown>({
  type,
  placeholder,
  state,
  setState,
  inputMode,
  ...props
}: IPlaceholderInputProps<T>): ReactElement => (
  <input
    {...props}
    {...{
      type,
      placeholder,
      value: state,
      onChange: (e) => setState((typeof state === 'number' ? Number(e.target.value) : e.target.value) as T),
    }}
    className="border-b-2 outline-none focus:outline-none border-action/50 focus:border-action/100 transition-colors duration-300 ease-in px-1 py-3"
    inputMode={inputMode}
  />
  );

export default PlaceholderInput;
