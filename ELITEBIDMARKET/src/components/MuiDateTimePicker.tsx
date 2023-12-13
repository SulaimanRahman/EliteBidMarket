import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { dateConverter } from "../Helper";

const DateTimePickerValue = () => {
  const [endBidDateandTime, setEndBidDateandTime] = useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
  const [dateSelected, setDateSelected] = useState<string>(
    "Tue Apr 05 2022 15:30:00 GMT-0700 (Pacific Daylight Time)"
  );

  // const [Value, setValue] = useState(second)
  const getDate = (newValue: string) => {
    console.log(newValue.$d);
    // const formatedDate = dateConverter(newValue.$d);
    // console.log(formatedDate);
    // console.log();
    // setEndDateTime(newValue.$d);
    const inputDateObject = new Date(newValue);

    const year = inputDateObject.getFullYear();
    const month = (inputDateObject.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDateObject.getDate().toString().padStart(2, "0");
    const hours = inputDateObject.getHours().toString().padStart(2, "0");
    const minutes = inputDateObject.getMinutes().toString().padStart(2, "0");
    const seconds = inputDateObject.getSeconds().toString().padStart(2, "0");

    const outputDateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    setDateSelected(outputDateString);
    console.log(outputDateString);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
        <DateTimePicker
          label="End Date and"
          value={value}
          onChange={(newValue) => getDate(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

{
  /* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
              <DateTimePicker
                label="End Date and"
                value={endDateTime}
                onChange={(newValue) => {
                  console.log("NEw Value: ");
                  console.log(newValue.$d);
                  const formatedDate = dateConverter(newValue.$d);
                  console.log(formatedDate);
                  console.log();
                  // setEndDateTime(newValue.$d);
                }}
              />
            </DemoContainer>
          </LocalizationProvider> */
}

export default DateTimePickerValue;
