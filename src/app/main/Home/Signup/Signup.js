import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography, Icon } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Signupheader from "../Signupheader/Signupheader";
import Autocomplete from "@mui/material/Autocomplete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AvatarUploader from "react-avatar-uploader";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { submitLogin } from "app/auth/store/loginSlice";
import * as yup from "yup";
import _ from "@lodash";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const schema = yup.object().shape({
  email: yup
    .string()
    .email("You must enter a valid email")
    .required("You must enter a email"),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(10, 'Password is too short - should be 10 chars minimum.'),
  password_confirmation: yup
    .string()
    .required('Please enter your password.')
    .min(10, 'Password is too short - should be 10 chars minimum.')
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

const defaultValues = {
  email: "",
  password: "",
};

function Signup() {
  const dispatch = useDispatch();
  const login = useSelector(({ auth }) => auth.login);
  const {
    control,
    setValue,
    formState,
    handleSubmit,
    reset,
    trigger,
    setError,
  } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setValue("email", "admin@gmail.com", { shouldDirty: true, shouldValidate: true, });
    setValue("password", "Admin@1234", { shouldDirty: true, shouldValidate: true });
    setValue("password_confirmation", "Admin@1234", { shouldDirty: true, shouldValidate: true });
  }, [reset, setValue, trigger]);

  useEffect(() => {
    login.errors.forEach((error) => {
      setError(error.type, {
        type: "manual",
        message: error.message,
      });
    });
  }, [login.errors, setError]);

  function onSubmit(model) {
    dispatch(submitLogin(model));
  }

  const [gender, setGender] = React.useState("");

  const genderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <Signupheader />
      <div>
        <div className="flex flex-row justify-center">
          <Card
            style={{
              marginTop: "150px",
              width: "524px",
              height: "auto",
              borderRadius: "4px",
            }}
          >
            <div style={{ marginTop: "21px", textAlign: "center" }}>
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: " #101828",
                }}
              >
                Welcome
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400px",
                  color: "#667085",
                }}
              >
                To make account Please enter your details.
              </p>
            </div>
            <div className="mt-20">
              <hr style={{ width: "100%" }} />
            </div>
            <CardContent>
              <div style={{ marginTop: "26px" }}>
                <Button
                  style={{
                    height: "44px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    border: "1px solid #D0D5DD",
                  }}
                  className="w-full"
                >
                  {" "}
                  <img
                    width="25px"
                    style={{ marginRight: "5px" }}
                    src="assets/images/GariConnect/Google.png"
                    alt="logo"
                  ></img>{" "}
                  Sign up with Google
                </Button>
              </div>
              <div style={{ marginTop: "6px" }}>
                <Button
                  style={{
                    border: "1px solid #D0D5DD",
                    fontSize: "16px",
                    height: "44px",
                    borderRadius: "8px",
                  }}
                  className="w-full"
                >
                  {" "}
                  <img
                    width="25px"
                    style={{ marginRight: "5px" }}
                    src="assets/images/GariConnect/Vector.png"
                    alt="logo"
                  ></img>{" "}
                  Sign up with Facebook
                </Button>
              </div>
              <div
                className="flex flex-row justify-center"
                style={{ marginTop: "28px" }}
              >
                <hr
                  style={{
                    width: "45%",
                    marginTop: "8px",
                    marginRight: "12px",
                  }}
                />
                <p
                  style={{
                    color: "#98A2B3",
                  }}
                >
                  or
                </p>
                <hr
                  style={{
                    width: "45%",
                    marginTop: "8px",
                    marginLeft: "12px",
                  }}
                />
              </div>

              <form className="flex flex-col justify-center w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex space-x-10">
                  <div className="w-full">
                    <Typography
                      style={{
                        marginTop: "14px",
                        fontSize: "14px",
                        fontWeight: "500px",
                        color: "#344054",
                      }}
                    >
                      First name
                    </Typography>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          {...field}
                          type="text"
                          error={!!errors.email}
                          helperText={errors?.email?.message}
                          InputProps={{
                            className: 'rounded-lg mt-8'
                          }}
                          variant="outlined"
                        />
                      )}
                    />
                  </div>

                  <div className="w-full">
                    <Typography
                      style={{
                        marginTop: "14px",
                        fontSize: "14px",
                        fontWeight: "500px",
                        color: "#344054",
                      }}
                    >
                      Last name
                    </Typography>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          {...field}
                          type="text"
                          error={!!errors.email}
                          helperText={errors?.email?.message}
                          InputProps={{
                            className: 'rounded-lg mt-8'
                          }}
                          variant="outlined"
                        />
                      )}
                    />
                  </div>
                </div>
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                    marginTop: "17px",
                  }}
                >
                  Enter email address
                </Typography>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      type="text"
                      error={!!errors.email}
                      helperText={errors?.email?.message}
                      InputProps={{
                        className: 'rounded-lg mt-8'
                      }}
                      variant="outlined"
                    />
                  )}
                />

                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                    marginTop: "17px",
                  }}
                >
                  Phone number
                </Typography>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      {...field}
                      type="text"
                      error={!!errors.email}
                      helperText={errors?.email?.message}
                      InputProps={{
                        className: 'rounded-lg mt-8'
                      }}
                      variant="outlined"
                    />
                  )}
                />
                <FormControl fullWidth>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                      marginTop: "17px",
                    }}
                  >
                    City
                  </Typography>
                  <Autocomplete
                    popupIcon={
                      <KeyboardArrowDownIcon
                        style={{ color: "rgba(16, 24, 40, 1)" }}
                      />
                    }
                    className="mt-6"
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ height: 44 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size="medium"
                        placeholder="Honda"
                        sx={{
                          "& fieldset": {
                            borderRadius: "8px",
                          },
                        }}
                      />
                    )}
                  />
                </FormControl>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <Typography
                      style={{
                        fontSize: "14px",
                        fontWeight: "500px",
                        color: "#344054",
                        marginTop: "17px",
                      }}
                    >
                      Gender
                    </Typography>
                    <Select
                      className="mt-6"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={gender}
                      onChange={genderChange}
                      sx={{ borderRadius: "8px", height: "44" }}
                      IconComponent={() => (
                        <KeyboardArrowDownIcon
                          className="mr-10"
                          style={{ color: "rgba(16, 24, 40, 1)" }}
                        />
                      )}
                    >
                      <MenuItem value={10}>Male</MenuItem>
                      <MenuItem value={20}>Female</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <div style={{ marginTop: "25px" }}>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                    }}
                  >
                    Enter password
                  </Typography>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        type="password"
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                        variant="outlined"
                        InputProps={{
                          className: 'pr-2 rounded-lg mt-8',
                          type: showPassword ? 'text' : 'password',
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={() => setShowPassword(!showPassword)} size="large">
                                <Icon className="text-20" color="action">
                                  {showPassword ? 'visibility' : 'visibility_off'}
                                </Icon>
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        required
                      />
                    )}
                  />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                      marginTop: "8px",
                    }}
                  >
                    Re-enter password
                  </Typography>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        type="password"
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                        variant="outlined"
                        InputProps={{
                          className: 'pr-2 rounded-lg mt-8',
                          type: showPassword ? 'text' : 'password',
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={() => setShowPassword(!showPassword)} size="large">
                                <Icon className="text-20" color="action">
                                  {showPassword ? 'visibility' : 'visibility_off'}
                                </Icon>
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        required
                      />
                    )}
                  />
                </div>

                <Typography
                  className="font-medium text-sm mt-24"
                  style={{ color: "#344054" }}
                >
                  Upload profile photo
                </Typography>
                <div className="flex mt-12">
                  <AvatarUploader size={59} uploadURL="http://localhost:3000" />
                  <Typography
                    className="mt-16 ml-12 font-medium text-sm"
                    style={{ color: "#D22A8F" }}
                  >
                    Browse
                  </Typography>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <Button
                    component={Link}
                    to="/Verifyaccount"
                    style={{
                      height: "44px",
                      background: "#D22A8F",
                      color: "#FFFFFF",
                      fontSize: "16px",
                    }}
                    className="w-full rounded-lg"
                  >
                    Sign up
                  </Button>
                </div>
              </form>
              <div className="sm:mt-20 mt-24">
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginTop: "24px",
                  }}
                >
                  Already have an account?
                  <a
                    href="/Signin"
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#D22A8F",
                      textAlign: "center",
                      marginTop: "24px",
                      textDecoration: "none",
                    }}
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-60">
        <Typography
          className="absolute bottom-0 text-16 font-normal pb-10"
          style={{ color: "#98A2B3" }}
        >
          © 2022 GariConnect. All rights reserved.
        </Typography>
      </div>
    </div>
  );
}

export default Signup;
