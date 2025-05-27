import emailjs from "emailjs-com";

export const sendSignupEmail = (formData) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: `${formData.first_name} ${formData.last_name}`,
      to_email: formData.email,
      message: "Welcome to the community! 🎉",
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};
