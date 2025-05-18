interface Props {
  onclick: () => void;
  title: string;
  className: string;
}

function Button({ onclick, title, className = '' }: Props) {
  return (
    <button
      onClick={onclick}
      className={className}
    >
      {title}
    </button>
  );
}

export default Button;
