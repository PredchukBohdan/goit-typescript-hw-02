import s from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  text: string;
}

export const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return <div className={s.errorMessage}>{text}</div>;
};
