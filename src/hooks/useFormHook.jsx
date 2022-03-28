import { useState } from "react";

export const useFormHook = (params) => {
  const [form, setForm] = useState(params);

  const handleChange = (event) => {
    if (event.target) {
      setForm({ ...form, [event.target.name]: event.target.value });
    } else {
      setForm(event);
    }
  };
  return [form, handleChange];
};
