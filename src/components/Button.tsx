'use client';

type Props = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({ icon, children, onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
  );
}
