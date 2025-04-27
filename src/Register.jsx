import React, { useReducer } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
  address: "",
  city: "",
  province: "",
};
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: [action.value],
      };
    case "NEW_MEMBER":
      return state;
    default:
      return state;
  }
}

export default function Register() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleChange(e) {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  }

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Firstname: </label>
      <input
        {...register("firstname", { required: true })}
        placeholder="firstname"
        onChange={handleChange}
        aria-invalid={errors.firstname ? "true" : "false"}
      />
      {errors.firstname?.type === "required" && (
        <p role="alert">First name is required</p>
      )}

      <label> Lastname:</label>
      <input
        {...register("lastname", { required: true })}
        placeholder="lastname"
        onChange={handleChange}
      />
      {errors.lastname?.type === "required" && (
        <p role="alert">Last name is required</p>
      )}

      <label>Email:</label>

      <input
        {...register("email", { required: true })}
        placeholder="email"
        onChange={handleChange}
      />

      <label>Phone number</label>
      <input
        {...register("phonenumber", { required: true })}
        placeholder="phonenumber"
        onChange={handleChange}
      />

      <label>Address</label>
      <input
        {...register("address", { required: true })}
        placeholder="address"
        onChange={handleChange}
      />

      <label>City</label>
      <input
        {...register("city", { required: true })}
        placeholder="city"
        onChange={handleChange}
      />

      <label>Province</label>
      <input
        {...register("province", { required: true })}
        placeholder="province"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
