import React from "react";
import { Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addDayId } from './../../ListStepper/store/setAvailabilitySlice'

const schema = yup.object().shape({
  Monday: yup.boolean().oneOf([true], "You must turn it on."),
  Tuesday: yup.boolean().oneOf([true], "You must turn it on."),
  Wednesday: yup.boolean().oneOf([true], "You must turn it on."),
  Thursday: yup.boolean().oneOf([true], "You must turn it on."),
  Friday: yup.boolean().oneOf([true], "You must turn it on."),
  Saturday: yup.boolean().oneOf([true], "You must turn it on."),
  Sunday: yup.boolean().oneOf([true], "You must turn it on."),
});

const Availability = () => {

  const dispatch = useDispatch();

  const availabilities = useSelector((state) => state.setAvailability);
  console.log(availabilities);

  const { handleSubmit, register, reset, control, watch, formState } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors, touchedFields } = formState;

  const data = watch();

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#D22A8F",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));



  // const handleChange = (event) => {
  //   // setChecked(event.target.checked);
  //   console.log(event.target)
  // };

  return (
    <div>
      <div className="flex flex-row justify-between mt-24">
        <div>
          <Typography className="text-sm font-medium ">Monday</Typography>
        </div>
        <div style={{ float: "right" }}>
          <Controller
            name="Monday"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, ref, onBlur } }) => (
              <AntSwitch
                defaultChecked
                onChange={(event) => {

                  if (event.target.checked)
                    dispatch(addDayId("1"))

                }}
                inputProps={{ "aria-label": "ant design" }}
              />
            )}
          />
        </div>
      </div>
      <hr className="w-full mt-20" />
      <div className="flex flex-row justify-between mt-24">
        <div>
          <Typography className="text-sm font-medium ">Tuesday</Typography>
        </div>
        <div style={{ float: "right" }}>
          <Controller
            name="Tuesday"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, ref, onBlur } }) => (
              <AntSwitch
                defaultChecked
                onChange={(event) => {

                  if (event.target.checked)
                    dispatch(addDayId({ dayId: "2" }))

                }}
                inputProps={{ "aria-label": "ant design" }}
              />
            )}
          />
        </div>
      </div>
      <hr className="w-full mt-20" />
      <div className="flex flex-row justify-between mt-24">
        <div>
          <Typography className="text-sm font-medium ">Wednesday</Typography>
        </div>
        <div style={{ float: "right" }}>
          <Controller
            name="Wednesday"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, ref, onBlur } }) => (
              <AntSwitch
                defaultChecked
                onChange={(event) => {

                  if (event.target.checked)
                    dispatch(addDayId({ dayId: "3" }))

                }}
                inputProps={{ "aria-label": "ant design" }}
              />
            )}
          />
        </div>
      </div>
      <hr className="w-full mt-20" />
      <div className="flex flex-row justify-between mt-24">
        <div>
          <Typography className="text-sm font-medium ">Thursday</Typography>
        </div>
        <div style={{ float: "right" }}>
          <Controller
            name="Thursday"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, ref, onBlur } }) => (
              <AntSwitch
                defaultChecked
                onChange={(event) => {

                  if (event.target.checked)
                    dispatch(addDayId({ dayId: "4" }))

                }}
                inputProps={{ "aria-label": "ant design" }}
              />
            )}
          />
        </div>
      </div>
      <hr className="w-full mt-20" />
      <div className="flex flex-row justify-between mt-24">
        <div>
          <Typography className="text-sm font-medium ">Friday</Typography>
        </div>
        <div style={{ float: "right" }}>
          <Controller
            name="Friday"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, ref, onBlur } }) => (
              <AntSwitch
                defaultChecked
                onChange={(event) => {

                  if (event.target.checked)
                    dispatch(addDayId({ dayId: "5" }))

                }}
                inputProps={{ "aria-label": "ant design" }}
              />
            )}
          />
        </div>
      </div>
      <hr className="w-full mt-20" />
      <div className="flex flex-row justify-between mt-24">
        <div>
          <Typography className="text-sm font-medium ">Saturday</Typography>
        </div>
        <div style={{ float: "right" }}>
          <Controller
            name="Saturday"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, ref, onBlur } }) => (
              <AntSwitch
                defaultChecked
                onChange={(event) => {

                  if (event.target.checked)
                    dispatch(addDayId({ dayId: "6" }))

                }}
                inputProps={{ "aria-label": "ant design" }}
              />
            )}
          />
        </div>
      </div>
      <hr className="w-full mt-20" />
      <div className="flex flex-row justify-between mt-24">
        <div>
          <Typography className="text-sm font-medium ">Sunday</Typography>
        </div>
        <div style={{ float: "right" }}>
          <Controller
            name="Sunday"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, ref, onBlur } }) => (
              <AntSwitch
                defaultChecked
                onChange={(event) => {

                  if (event.target.checked)
                    dispatch(addDayId({ dayId: "7" }))

                }}
                inputProps={{ "aria-label": "ant design" }}
              />
            )}
          />
        </div>
      </div>
      <hr className="w-full mt-20" />
    </div>
  );
};

export default Availability;
