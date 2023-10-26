import React from "react";
import { useFormikContext } from "formik";

interface Props {
  label: string;
  type: string;
  name: string;
}

const PreAuthInput = ({ label, type, name }: Props) => {
  const { values, errors, handleChange, handleBlur } = useFormikContext();
  return (
    <div className="flex flex-col">
      <label htmlFor="Email-id" className="text-base">
        {label}
      </label>
      <input
        type={type}
        className="h-8"
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default PreAuthInput;
