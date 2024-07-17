import React from "react";

export default function CustomInput({ label, value, setValue, type  ,dir}) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
        dir={dir === 'ar' ? 'rtl' : 'ltr' }
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          // id='email'
          // name='email'
          type="text"
          // autoComplete='email'
          className="appearance-none block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 border-indigo-800 focus:border-indigo-900 sm:text-sm"
        />
      </div>
    </div>
  );
}
