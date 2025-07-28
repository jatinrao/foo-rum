'use client';

import useToast from "@/hooks/useToast";

type Props = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?:string;
  featureFlag?:boolean; // true means feature is live
};

export default function Button({ icon, children, onClick, disabled,className,featureFlag=true }: Props) {
  const { showToast,Toast } = useToast();
  return (
    <>
    <button
      onClick={!featureFlag ? showToast.bind(null,'Feature not available') :onClick}
      disabled={disabled}
      className={icon ? `${className}`: `flex items-center gap-2 font-semibold px-4 py-2 rounded disabled:opacity-50 ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
    <Toast/>
    </>
  );
}
