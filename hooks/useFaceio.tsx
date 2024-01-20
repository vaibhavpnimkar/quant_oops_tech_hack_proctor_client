import faceIO from "@faceio/fiojs";
import { useEffect } from "react";

export const useFaceio = () => {
  let faceio: any;
  useEffect(() => {
    faceio = new faceIO(import.meta.env.VITE_APP_FIO_PUBLIC_ID);
  }, []);

  const handleSignIn = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "example@gmail.com",
          whoami: "12345",
        },
      });
      console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
    } catch (error) {
      throw error;
    }
  };
  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(
        ` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `,
        response.payload
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return {
    handleSignIn,
    handleLogIn,
  };
};
