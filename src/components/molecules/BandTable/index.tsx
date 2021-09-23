import {
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from "@mui/material"
import { FunctionComponent } from "react"
import { Band } from "../../../@types"
import { ExpansibleTableRow } from "../../atoms"

interface BandTableProps {
   bands: Band[]
}

const BandTable: FunctionComponent<BandTableProps> = ({ bands }) => {
   return (
      <TableContainer component={Paper}>
         <Table stickyHeader>
            <TableHead>
               <TableRow>
                  <TableCell width="10%" />
                  <TableCell width="15%">Name</TableCell>
                  <TableCell align="left" width="15%">
                     Country
                  </TableCell>
                  <TableCell align="left" width="15%">
                     Year
                  </TableCell>
                  <TableCell align="left" width="20%">
                     Genre
                  </TableCell>
                  <TableCell align="left" width="25%">
                     Members
                  </TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {bands.map(band => (
                  <ExpansibleTableRow key={band.id} band={band} />
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}

export default BandTable
