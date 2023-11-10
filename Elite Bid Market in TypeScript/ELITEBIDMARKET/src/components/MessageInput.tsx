import React from 'react'

interface MessageInputProps {
  placeholder: string;
  rows:number
}

const MessageInput = (props: MessageInputProps) => {
  return (
    <textarea

      placeholder={props.placeholder}
      rows={props.rows}
      className='bg-primary border-b-2 border-black placeholder:text-placeholder placeholder:px-3 w-full align-text-top'
      
    />
  )
}

export default MessageInput
