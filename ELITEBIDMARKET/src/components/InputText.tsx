import React from "react";

interface InputTextProps {
  placeholder: string;
}

const InputText = (props: InputTextProps) => {
  return (
    <input
      placeholder={props.placeholder}
      className="bg-primary md:border-b-2 border-b-[1px] border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 w-full align-text-top"
    />
  );
};

export default InputText;
