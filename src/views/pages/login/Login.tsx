import React from "react";
import LoginForm from "../../../composites/loginForm/LoginForm";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  increment,
  decrement,
  incrementByValue,
} from "../../../redux/slices/counter"; // Removed extra slashes
function Login() {
  const { value } = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();
  return (
    <div className="flex min-h-[85vh]">
      <div className="flex-1  bg-green-400"></div>
      <div className="flex-1 flex justify-center  bg-cyan-50 items-center">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
