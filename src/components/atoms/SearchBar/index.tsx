import { Search } from "@mui/icons-material"
import {
   Box,
   FormControl,
   Input,
   InputLabel,
   MenuItem,
   Select,
   SelectChangeEvent,
} from "@mui/material"
import { FunctionComponent, KeyboardEventHandler, useState } from "react"
import { BandResponse } from "../../../@types"
import { useBands } from "../../../hooks"

interface SearchBarProps {
   getBands: ReturnType<typeof useBands>["getBands"]
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ getBands }) => {
   const [value, setValue] = useState("")
   const [sort, setSort] = useState("name")

   const handleSearch: KeyboardEventHandler<HTMLDivElement> = e => {
      if (e.key !== "Enter") return
      getBands.run("name", "asc", value)
   }

   const handleChangeSorting = (e: SelectChangeEvent<string>) => {
      setSort(e.target.value)
      getBands.run(e.target.value as keyof BandResponse, "asc")
   }

   return (
      <Box
         display="flex"
         justifyContent="space-around"
         marginBottom={1}
         width="100%"
      >
         <Input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Search..."
            endAdornment={<Search />}
            onKeyPress={handleSearch}
            margin="dense"
            disabled={getBands.isLoading}
            style={{ width: "40%" }}
         />
         <FormControl style={{ width: "40%" }} disabled={getBands.isLoading}>
            <InputLabel id="sort">Sort by</InputLabel>
            <Select
               labelId="sort"
               id="sort"
               value={sort}
               label="Sort"
               onChange={handleChangeSorting}
               variant="standard"
            >
               <MenuItem value={"name"}>Name</MenuItem>
               <MenuItem value={"country"}>Country</MenuItem>
               <MenuItem value={"year"}>Year</MenuItem>
               <MenuItem value={"genre"}>Genre</MenuItem>
            </Select>
         </FormControl>
      </Box>
   )
}

export default SearchBar
