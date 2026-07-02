import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string,
  label?: string
}

export function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-sm font-bold text-gray-700">
        {label}
      </label>
      <input
        {...props}
        className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
          ${error 
            ? 'border-red-500 focus:ring-red-200' 
            : 'border-gray-300 focus:ring-blue-200'}`}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}

export default Input;
