import {
   TableRow,
   TableCell,
   IconButton,
   Collapse,
   Box,
   Typography,
   Table,
   TableBody,
   TableHead,
} from "@mui/material"
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material"
import { useState, FunctionComponent } from "react"
import { Band } from "../../../@types"

interface ExpansibleTableRowProps {
   band: Band
}

const ExpansibleTableRow: FunctionComponent<ExpansibleTableRowProps> = ({
   band,
}) => {
   const [open, setOpen] = useState(false)
   return (
      <>
         <TableRow sx={{ "& > *": { borderBottom: "unset" } }} hover>
            <TableCell>
               <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
               >
                  {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
               </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
               {band.name}
            </TableCell>
            <TableCell align="left">{band.country}</TableCell>
            <TableCell align="left">{band.year}</TableCell>
            <TableCell align="left">{band.genre}</TableCell>
            <TableCell align="left">
               {band.members.map(member => (
                  <TableRow key={member}>
                     <li>{member}</li>
                  </TableRow>
               ))}
            </TableCell>
         </TableRow>
         <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                     <Typography variant="h6" gutterBottom component="div">
                        Albums
                     </Typography>
                     <Table size="small">
                        <TableHead>
                           <TableRow>
                              <TableCell>Name</TableCell>
                              <TableCell>Year</TableCell>
                           </TableRow>
                        </TableHead>
                        <TableBody>
                           {band.albums?.map((album, index) => (
                              <TableRow key={index}>
                                 <TableCell component="th" scope="row">
                                    {album.name}
                                 </TableCell>
                                 <TableCell>{album.year}</TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </Box>
               </Collapse>
            </TableCell>
         </TableRow>
      </>
   )
}

export default ExpansibleTableRow
