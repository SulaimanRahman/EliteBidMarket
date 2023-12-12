import React, { FC, useState, useEffect } from 'react';

interface DateConverterProps {
  inputDate: string;
}

function dateConverter (props: DateConverterProps) {
  const [outputDate, setOutputDate] = useState<string>("");

  const inputDateObject = new Date(props.inputDate);

  const year = inputDateObject.getFullYear();
  const month = (inputDateObject.getMonth() + 1).toString().padStart(2, '0');
  const day = inputDateObject.getDate().toString().padStart(2, '0');
  const hours = inputDateObject.getHours().toString().padStart(2, '0');
  const minutes = inputDateObject.getMinutes().toString().padStart(2, '0');
  const seconds = inputDateObject.getSeconds().toString().padStart(2, '0');

  const outputDateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  setOutputDate(outputDateString);

  return outputDate
};

export default dateConverter;
