interface IProps {
  msg?: string;
}

const InputErrorMessage = ({ msg }: IProps) => {
  if (!msg) return null;
  return (
    <span
      className="mt-1.5 block text-sm font-medium text-red-600"
      role="alert"
    >
      {msg}
    </span>
  );
};

export default InputErrorMessage;
