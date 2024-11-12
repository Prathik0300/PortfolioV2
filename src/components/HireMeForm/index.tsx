import { BaseSyntheticEvent, useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { formContainer, formTitle, textField, inputField } from "./style";

const HireMeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name,
      email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
      message: !formData.message,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true); // Returns true if no errors
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle successful form submission (e.g., send the data to an API)
      console.log("Form submitted successfully:", formData);
      setFormData({ name: "", email: "", message: "" }); // Reset form fields
    } else {
      console.log("Form contains errors.");
    }
  };

  return (
    <FormControl className={formContainer}>
      <div className={formTitle}>Let’s Collaborate</div>
      <TextField
        className={textField}
        variant="outlined"
        label="Name*"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        helperText={errors.name && "Name is required"}
        FormHelperTextProps={{
          classes: {
            root: inputField,
          },
        }}
      />
      <TextField
        variant="outlined"
        label="Email*"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        helperText={errors.email && "Enter a valid email address"}
        FormHelperTextProps={{
          classes: {
            root: inputField,
          },
        }}
      />
      <TextField
        variant="outlined"
        label="Message*"
        name="message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        helperText={errors.message && "Message is required"}
        FormHelperTextProps={{
          classes: {
            root: inputField,
          },
        }}
      />
      <Button onClick={handleSubmit} variant="contained" type="submit">
        Submit
      </Button>
    </FormControl>
  );
};

export default HireMeForm;
