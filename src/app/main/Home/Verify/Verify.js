import React, { useState } from "react";
import { Typography, TextField, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import Signupheader from "../Signupheader/Signupheader";
import { verifyOtpData } from '../../../../app/auth/store/verifyOtpSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import _ from '@lodash';
import OTPInput, { ResendOTP } from "otp-input-react";

const schema = yup.object().shape({
  otp_code: yup
    .string()
    .required('You must enter Code'),
});

const defaultValues = {
  otp_code: '',
  phone_no: ''
};

function OTP() {
  const history = useHistory();
  const dispatch = useDispatch();
  const otp = useSelector(({ auth }) => auth.forget);
  const otpStatus = useSelector(({ auth }) => auth.verify);
  console.log(otp.data.customer.data.otp_code)
  const { control, setValue, formState, handleSubmit, reset, trigger, } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    setValue('otp_code', '');
    setValue('phone_no', otp.data.customer.data.phone_no);
  }, [reset, setValue, trigger]);

  function onSubmit(model) {
    dispatch(verifyOtpData(model))
      .then(() => {
        if (otpStatus.data.status === true) {
          history.push('/Setpassword');
        }
      });
  }

  return (
    <div>
      <Signupheader />
      <div className="flex flex-row justify-center">
        <Card
          style={{
            marginTop: "150px",
            width: "524px",
            height: "361px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
          }}
        >
          <div style={{ marginTop: "21px", textAlign: "center" }}>
            <h1
              style={{ fontSize: "24px", fontWeight: "600", color: " #101828" }}
            >
              Verify
            </h1>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400px",
                color: "#667085",
                marginTop: "10px",
              }}
            >
              Please enter 6 digit code send on your phone 034******59
            </p>
          </div>
          <div className="w-full my-20 ">
            <hr />
          </div>
          <CardContent>
            <form className="flex flex-col justify-center w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col space-y-40">
                <FormControl className="mx-auto" variant="outlined">
                  <Controller
                    name="otp_code"
                    control={control}
                    rules={{ required: 'otp_code' }}
                    render={({ field: { onChange, value } }) => (
                      <OTPInput
                        value={value}
                        onChange={onChange}
                        autoFocus
                        OTPLength={4}
                        otpType="number"
                        inputStyles={{
                          border: "1px solid #D0D5DD",
                          borderRadius: "8px",
                          width: "66px",
                          height: "66px",
                          fontSize: "12px",
                          color: "#000",
                          fontWeight: "500",
                          fontSize: "32px",
                        }}
                        disabled={false}

                      />
                    )}
                  />
                </FormControl>
                {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}

                <Controller
                  name="phone_no"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      InputProps={{
                        className: "rounded-lg mb-11 mt-6 h-[44px]"
                      }}
                      type="text"
                      hidden
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Button
                  // component={Link}
                  // to="/Setpassword"
                  type="submit"
                  disabled={_.isEmpty(dirtyFields) || !isValid}
                  style={{
                    backgroundColor: "rgba(210, 42, 143, 1)",
                    height: "44px",
                    fontSize: "16px",
                  }}
                  className="w-full text-white rounded-lg"
                >
                  Submit
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
                Didn't receive code?
                <b
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#D22A8F",
                    textAlign: "center",
                    marginTop: "24px",
                  }}
                >
                  Resend Code
                </b>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-row justify-center ">
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
export default OTP;
