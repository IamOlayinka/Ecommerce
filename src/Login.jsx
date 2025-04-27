import React, { useReducer } from "react";

// Correct reducer function signature
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "ADD_USER":
      // This would typically be used after form submission
      return state; // Or handle submission logic here
    default:
      return state;
  }
}

const initialState = {
  email: "",
  password: "",
};

export default function Login() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_USER",
      payload: state, // Send the current state as payload
    });
    console.log("Form submitted:", state);
    // Here you would typically send data to an API
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <div>
          <table className="mx-auto">
            <tr>
              <td>
                <label className="text-red-400">Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  className="email border border-gray-300 rounded px-2 py-1 ml-2"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  className="password border border-gray-300 rounded px-2 py-1 ml-2"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </table>
          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
