import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginFields } from "../utils/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

import { AuthContext } from "../context/AuthContext";
import { User } from "../utils/common.type";

const fields = loginFields;
let fieldsState: User = {
  email: "",
  password: "",
  id: 0,
  username: "",
};
// fields.forEach((field) => (fieldsState["id"] = ""));
export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e: any) => {
    //  console.log({ ...loginState }, e.target.id, e.target.value);
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  console.log(loginState);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(loginState);
    let result = login(loginState);
  };

  return (
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
      <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
        <div className="-space-y-px">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id as keyof User]}
              customClass={""}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <FormExtra />
        <FormAction handleSubmit={handleSubmit} text="Login" />
      </form>
    </div>
  );
}
