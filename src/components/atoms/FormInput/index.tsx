import {
   FormControl,
   InputLabel,
   Input,
   FormHelperText,
   FormControlProps,
   IconButton,
   InputAdornment,
} from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { FunctionComponent, useState } from "react"
import { Control, Controller } from "react-hook-form"

interface FormInputProps extends FormControlProps {
   label: string
   name: string
   control: Control<any>
   rules: {}
}

const FormInput: FunctionComponent<FormInputProps> = ({
   name,
   label,
   control,
   rules,
   ...rest
}) => {
   const [pwVisible, setPwVisible] = useState(
      name === "password" || name === "repeatPassword" ? false : true
   )
   return (
      <Controller
         control={control}
         name={name}
         rules={rules}
         render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
         }) => (
            <FormControl
               fullWidth
               margin="dense"
               error={Boolean(error)}
               {...rest}
            >
               <InputLabel htmlFor={name}>{label}</InputLabel>
               <Input
                  id={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  inputRef={ref}
                  type={pwVisible ? "text" : "password"}
                  endAdornment={
                     (name === "password" || name === "repeatPassword") && (
                        <InputAdornment position="end">
                           <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setPwVisible(prev => !prev)}
                              onMouseDown={() => setPwVisible(prev => !prev)}
                              size="small"
                              edge="end"
                              disableRipple
                              disableFocusRipple
                              style={{ backgroundColor: "transparent" }}
                           >
                              {pwVisible ? (
                                 <Visibility fontSize="small" />
                              ) : (
                                 <VisibilityOff fontSize="small" />
                              )}
                           </IconButton>
                        </InputAdornment>
                     )
                  }
               />
               {error && <FormHelperText>{error.message}</FormHelperText>}
            </FormControl>
         )}
      />
   )
}

export default FormInput
