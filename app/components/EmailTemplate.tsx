import { EmailTemplateProps } from "@/types";

const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
  const date = new Date().toLocaleString("en-GB");
  return (
    <div>
      <h2>
        You have a message from: <u>{name}</u>
      </h2>
      <h3>Message:</h3>
      <p>{message}</p>
      <h4>Sent at {date}</h4>
      <h4>Reply to: {email}</h4>
    </div>
  );
};

export default EmailTemplate;
