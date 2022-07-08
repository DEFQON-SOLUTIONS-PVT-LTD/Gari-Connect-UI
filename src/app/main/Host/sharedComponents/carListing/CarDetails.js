import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { addCar } from "./../../ListStepper/store/carDetailsSlice";

const schema = yup.object().shape({
  make: yup.array().min(1, "Please select a make."),
  category: yup.array().min(1, "Please select a category."),
  model: yup.array().min(1, "Please select a model."),
  chassis: yup.string().required("Please enter chassis number."),
  plate: yup.string().required("You must enter a value"),
  description: yup.string().required("Please enter description"),
  transmission: yup
    .string()
    .required("You must select a value")
    .oneOf(["Auto", "Manual"], "Select Auto or Manual."),
  type: yup.string().required("You must select a type"),
  eco: yup.string().required("You must select an ECO"),
});

const top100Films = [
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
];

var allMakesOptions = [];
var allModelOptions = [];
var allCategoriesOptions = [
  { label: "mini", categoryId: "1" },
  { label: "go", categoryId: "7" },
  { label: "premium", categoryId: "8" },
];

const CarDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://api.gariconnect.com:8080/api/make/all").then((data) => {
      data.data.makes.map((make) => {
        allMakesOptions.push({ makeId: make.makeId, label: make.makeName });
        console.log(allMakesOptions);
      });
    });
  }, []);

  const {
    handleSubmit,
    register,
    reset,
    control,
    watch,
    formState,
    getValues,
  } = useForm({
    mode: "all",
    // resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors, touchedFields } = formState;
  const data = watch();

  const onSubmit = (data) => {
    console.log("onsubmit chal gia", data);
    // console.log(getValues("make"));

    const car = {
      modelId: data.make.makeId,
      categoryId: data.category.categoryId,
      chassis_number: data.chassis,
      plate_number: data.plate,
      transmissionId: data.transmission,
      eco_friendly_Id: data.eco,
      description: data.description,
      vehicle_type_id: data.type,
      makeId: data.make.makeId,
    };

    dispatch(addCar(car));
  };

  const handleMakeChange = (e) => {
    console.log("yw e hai ", e);
  };
  const getModelByMakeId = () => {
    console.log(getValues("make"));
    const makeid = getValues("make");
    var data = {
      makeId: makeid.makeId.toString(),
    };
    console.log("Nomi: ", data);

    allModelOptions = [];

    axios
      .get(
        "http://api.gariconnect.com:8080/api/model/getbymakeId/" + makeid.makeId
      )
      .then((res) => {
        res.data.result.map((item) => {
          allModelOptions.push({ ...item, label: item.modelName });
        });
      });
  };

  return (
    <div>
      <div>
        <div className="flex space-x-10 mt-20">
          <FormControl fullWidth>
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
              }}
            >
              Make
            </Typography>
            <Controller
              name="make"
              control={control}
              defaultValue={[]}
              onChange={handleMakeChange}
              render={({ field: { onChange, value, onBlur, ref } }) => (
                <Autocomplete
                  popupIcon={<KeyboardArrowDownIcon />}
                  className="mt-6"
                  disablePortal
                  id="combo-box-demo"
                  value={value}
                  options={allMakesOptions}
                  onChange={(event, newValue) => {
                    console.log("chal gia onChange", event);
                    onChange(newValue);
                    getModelByMakeId();
                  }}
                  sx={{ height: 44 }}
                  renderInput={(params) => (
                    <TextField
                      error={!!errors.make}
                      helperText={errors?.make?.message}
                      onBlur={onBlur}
                      inputRef={ref}
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
              )}
            />
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
              }}
            >
              Category
            </Typography>
            <Controller
              name="category"
              control={control}
              defaultValue={[]}
              render={({ field: { onChange, value, onBlur, ref } }) => (
                <Autocomplete
                  popupIcon={<KeyboardArrowDownIcon />}
                  className="mt-6"
                  disablePortal
                  id="combo-box-demo"
                  options={allCategoriesOptions}
                  value={value}
                  onChange={(event, newValue) => {
                    onChange(newValue);
                  }}
                  sx={{ height: 44 }}
                  renderInput={(params) => (
                    <TextField
                      error={!!errors.category}
                      helperText={errors?.category?.message}
                      onBlur={onBlur}
                      inputRef={ref}
                      {...params}
                      size="medium"
                      placeholder="Elite"
                      sx={{
                        "& fieldset": {
                          borderRadius: "8px",
                        },
                      }}
                    />
                  )}
                />
              )}
            />
          </FormControl>
        </div>
        <div className="flex space-x-10 mt-20">
          <FormControl fullWidth>
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
              }}
            >
              Model
            </Typography>
            <Controller
              name="model"
              control={control}
              defaultValue={[]}
              render={({ field: { onChange, value, onBlur, ref } }) => (
                <Autocomplete
                  popupIcon={<KeyboardArrowDownIcon />}
                  className="mt-6"
                  disablePortal
                  id="combo-box-demo"
                  options={allModelOptions}
                  value={value}
                  onChange={(event, newValue) => {
                    onChange(newValue);
                  }}
                  sx={{ height: 44 }}
                  renderInput={(params) => (
                    <TextField
                      error={!!errors.model}
                      helperText={errors?.model?.message}
                      onBlur={onBlur}
                      inputRef={ref}
                      {...params}
                      size="medium"
                      placeholder="Yaris"
                      sx={{
                        "& fieldset": {
                          borderRadius: "8px",
                        },
                      }}
                    />
                  )}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
              }}
            >
              Chassis number
            </Typography>
            <Controller
              name="chassis"
              control={control}
              render={({ field }) => (
                <TextField
                  className="rounded-lg mb-11 "
                  placeholder="AFB 8954"
                  style={{ marginTop: "6px", height: "44px" }}
                  error={!!errors.chassis}
                  required
                  {...field}
                  helperText={errors?.chassis?.message}
                  sx={{
                    "& fieldset": {
                      borderRadius: "8px",
                    },
                  }}
                />
              )}
            />
          </FormControl>
        </div>
        <div className="flex space-x-10 mt-20">
          <FormControl fullWidth variant="outlined">
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
              }}
            >
              Plate number
            </Typography>
            <Controller
              name="plate"
              control={control}
              render={({ field }) => (
                <TextField
                  className="rounded-lg mb-11 "
                  placeholder="AFB 8954"
                  style={{ marginTop: "6px", height: "44px" }}
                  error={!!errors.plate}
                  required
                  {...field}
                  helperText={errors?.plate?.message}
                  sx={{
                    "& fieldset": {
                      borderRadius: "8px",
                    },
                  }}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
              }}
            >
              Transmission
            </Typography>
            <Controller
              name="transmission"
              render={({ field }) => (
                <FormControl error={!!errors.transmission} required fullWidth>
                  <Select
                    className="mt-6 rounded-8 h-52 w-full"
                    IconComponent={() => (
                      <KeyboardArrowDownIcon
                        className="mr-10"
                        style={{ color: "rgba(16, 24, 40, 1)" }}
                      />
                    )}
                    {...field}
                    variant="outlined"
                    fullWidth
                  >
                    <MenuItem value="1">Auto</MenuItem>
                    <MenuItem value="2">Manual</MenuItem>
                  </Select>
                  <FormHelperText>
                    {errors?.transmission?.message}
                  </FormHelperText>
                </FormControl>
              )}
              control={control}
            />
          </FormControl>
        </div>
        <div className="flex space-x-10 mt-20">
          <FormControl fullWidth>
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
              }}
            >
              Type
            </Typography>
            <Controller
              render={({ field }) => (
                <FormControl error={!!errors.type} required fullWidth>
                  <Select
                    className="mt-6 rounded-8 h-52 w-full"
                    IconComponent={() => (
                      <KeyboardArrowDownIcon
                        className="mr-10"
                        style={{ color: "rgba(16, 24, 40, 1)" }}
                      />
                    )}
                    {...field}
                    variant="outlined"
                    fullWidth
                  >
                    <MenuItem value="1">Sedan </MenuItem>
                    <MenuItem value="2">SVS</MenuItem>
                  </Select>
                  <FormHelperText>{errors?.type?.message}</FormHelperText>
                </FormControl>
              )}
              name="type"
              control={control}
            />
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
              }}
            >
              ECO friendly
            </Typography>
            <Controller
              render={({ field }) => (
                <FormControl error={!!errors.eco} required fullWidth>
                  <Select
                    className="mt-6 rounded-8 h-52 w-full"
                    IconComponent={() => (
                      <KeyboardArrowDownIcon
                        className="mr-10"
                        style={{ color: "rgba(16, 24, 40, 1)" }}
                      />
                    )}
                    {...field}
                    variant="outlined"
                    fullWidth
                  >
                    <MenuItem value="1">Electric</MenuItem>
                    <MenuItem value="2">Manual</MenuItem>
                  </Select>
                  <FormHelperText>{errors?.eco?.message}</FormHelperText>
                </FormControl>
              )}
              name="eco"
              control={control}
            />
          </FormControl>
        </div>
        <div className="mt-20">
          <FormControl fullWidth variant="outlined">
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
              }}
            >
              Description
            </Typography>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  multiline
                  rows={4}
                  placeholder="Writr description here.."
                  {...field}
                  type="text"
                  error={!!errors.description}
                  required
                  helperText={errors?.description?.message}
                  style={{
                    marginTop: "6px",
                    height: "44px",
                    marginBottom: "30px",
                  }}
                  sx={{
                    "& fieldset": {
                      borderRadius: "8px",
                    },
                  }}
                />
              )}
            />
          </FormControl>
        </div>
      </div>
      <div className="mt-96">
        <Button
          className="w-72 h-44 rounded-lg text-white"
          style={{ backgroundColor: "#D22A8F" }}
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CarDetails;
