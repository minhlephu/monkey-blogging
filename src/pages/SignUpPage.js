import { Label } from "components/label";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input } from "components/input";
import { Field } from "components/field";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { Button } from "components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "firebase-app/firebase-config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;
const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid  email address")
    .required("Please ener your email adddress"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});
const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // const handleSignUp = async (values) => {
  //   if (!isValid) return;
  //   console.log(values);
  //   const user = await createUserWithEmailAndPassword(
  //     auth,
  //     values.email,
  //     values.password
  //   );
  //   await updateProfile(auth.currentUser, {
  //     displayName: values.fullname,
  //   });
  //   toast.success("Register successfully");
  // };

  const handleSignUp = async (values) => {
    if (!isValid) return;
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    const colRef = collection(db, "users");

    await addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });

    toast.success("Register successfully!!!");
    navigate("/");
  };

  const [togglePassword, setTogglePassword] = useState(false);
  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-blog" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form
          className="form"
          action=""
          onSubmit={handleSubmit(handleSignUp)}
          autoComplete="off"
        >
          <Field>
            <Label htmlFor="fullname" className="label">
              Fullname
            </Label>
            <Input
              name="fullname"
              type="text"
              className="input"
              placeholder="Enter your fullname"
              control={control}
            />
          </Field>
          <Field>
            <Label htmlFor="email" className="label">
              Email address
            </Label>
            <Input
              name="email"
              type="email"
              className="input"
              placeholder="Enter your email"
              control={control}
            />
          </Field>
          <Field>
            <Label htmlFor="password" className="label">
              Password
            </Label>
            <Input
              name="password"
              type={togglePassword ? "text" : "password"}
              className="input"
              placeholder="Enter your password"
              control={control}
            >
              {!togglePassword ? (
                <IconEyeClose
                  onClick={() => setTogglePassword(true)}
                ></IconEyeClose>
              ) : (
                <IconEyeOpen
                  onClick={() => setTogglePassword(false)}
                ></IconEyeOpen>
              )}
            </Input>
          </Field>
          <Button
            type="submit"
            style={{
              maxWidth: 300,
              margin: "0 auto",
            }}
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            SignUp
          </Button>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
