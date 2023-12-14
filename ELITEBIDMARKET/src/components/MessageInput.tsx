// import React from "react"

interface MessageInputProps {
  placeholder: string
  rows: number
}

const MessageInput = (props: MessageInputProps) => {
  return (
    <textarea
      placeholder={props.placeholder}
      rows={props.rows}
      className='bg-primary md:border-b-2 border-b-[1px] border-black placeholder:text-placeholder placeholder:px-3 w-full align-text-top'
    />
  )
}

export default MessageInput
