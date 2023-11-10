import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Filter() {
  const [sort, setSort] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1 }} size="small" className="w-filter">
      <InputLabel id="demo-select-small-label">Sort by</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sort}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"A-Z"}>Alphabetical (A - Z)</MenuItem>
        <MenuItem value={"Z-A"}>Alphabetical (Z - A)</MenuItem>
        <MenuItem value={"LowestPrice"}>Lowest Price</MenuItem>
        <MenuItem value={"HighestPrice"}>Highest Price</MenuItem>
      </Select>
    </FormControl>
  );
}
