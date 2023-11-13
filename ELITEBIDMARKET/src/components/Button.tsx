import React from "react";

interface MessageInputProps {
  title: string;
}

const Button = (props: MessageInputProps) => {
  return (
    <div className="bg-button text-black hover:bg-buttonHover text-center text-buttontext font-bold md:px-button py-5 rounded-xl cursor-pointer">
      {props.title}
    </div>
  );
};

export default Button;
