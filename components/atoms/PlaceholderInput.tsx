import React, {
  Dispatch,
  InputHTMLAttributes,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';

import { ifCondition } from '../../utils';

interface IPlaceholderInputProps<T> {
  type: InputHTMLAttributes<HTMLInputElement>['type']
  placeholder: InputHTMLAttributes<HTMLInputElement>['placeholder']
  state: InputHTMLAttributes<HTMLInputElement>['value']
  setState: Dispatch<SetStateAction<T>>
  inputMode: InputHTMLAttributes<HTMLInputElement>['inputMode']
  error?: boolean
  errorMessage?: string
}

const PlaceholderInput = <T extends unknown>({
  type,
  placeholder,
  state,
  setState,
  inputMode,
  error,
  errorMessage,
  ...props
}: IPlaceholderInputProps<T>): ReactElement => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="relative w-full">
        <input
          {...props}
          {...{
            type:
              type === 'password'
                ? ifCondition(showPassword, 'text', 'password')
                : type,
            placeholder,
            value: state,
            onChange: (e) => setState(
              (typeof state === 'number'
                ? Number(e.target.value)
                : e.target.value) as T,
            ),
          }}
          className="border-b-2 outline-none focus:outline-none w-full border-action/50 focus:border-action/100 transition-colors duration-300 ease-in px-1 py-3"
          inputMode={inputMode}
        />
        {type === 'password' && (
          <button
            className="underline text-action absolute right-0 inset-y-0 mt-1 mr-3"
            onClick={() => setShowPassword((prev) => !prev)}
            type="button"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
      {
        (error ?? false) && (
          <p className="text-red-500 text-sm font-bold text-left">
            {errorMessage}
          </p>
        )
      }
    </div>
  );
};
PlaceholderInput.defaultProps = {
  error: false,
  errorMessage: '',
};

export default PlaceholderInput;
