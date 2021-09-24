import { Login, AccountCircle } from "@mui/icons-material"
import {
   AppBar,
   Box,
   IconButton,
   Menu,
   MenuItem,
   Toolbar,
   Typography,
} from "@mui/material"
import { navigate } from "hookrouter"
import { FunctionComponent, useState } from "react"
import { useUser } from "../../../hooks"

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
   const { user, logout } = useUser()
   const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

   return (
      <AppBar position="static">
         <Toolbar>
            <Typography
               variant="h4"
               component="a"
               sx={{
                  flexGrow: 1,
                  cursor: "pointer",
                  ":hover": {
                     color: "rgb(202, 90, 70)",
                  },
               }}
               onClick={() => navigate("/")}
            >
               Bands Page
            </Typography>
            {user ? (
               <Box>
                  <IconButton
                     size="large"
                     color="inherit"
                     onClick={e => setAnchorEl(e.currentTarget)}
                  >
                     <AccountCircle />
                  </IconButton>
                  <Menu
                     anchorEl={anchorEl}
                     anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     open={Boolean(anchorEl)}
                     onClose={() => setAnchorEl(null)}
                  >
                     <MenuItem onClick={logout}>Logout</MenuItem>
                  </Menu>
               </Box>
            ) : (
               <IconButton
                  size="large"
                  color="inherit"
                  onClick={() => navigate("/login")}
               >
                  <Login />
               </IconButton>
            )}
         </Toolbar>
      </AppBar>
   )
}

export default NavBar
