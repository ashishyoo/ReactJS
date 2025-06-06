interface IButton {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

const Button = ({ label, onClick, disabled }: IButton) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
