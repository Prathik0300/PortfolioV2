import emailjs from "emailjs-com";

export const sendEmail = async ({ targetEmail }) => {
  emailjs
    .sendForm("YOUR_SERVICE_ID", "6461630", targetEmail, "YOUR_USER_ID")
    .then(
      (result) => {
        // setStatus("Email sent successfully!");
        console.log(result.text);
      },
      (error) => {
        // setStatus("An error occurred. Please try again.");
        console.error(error.text);
      }
    );
};
