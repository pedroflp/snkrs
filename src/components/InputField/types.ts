import { HTMLInputTypeAttribute } from "react";

export type InputFieldProps = {
  value: any;
  onChange: (value: any) => void;
  placeholder?: string;
  isLoading?: boolean;
  maxLength?: number;
  error?: string | null;
  inputType?: HTMLInputTypeAttribute;
  style?: React.CSSProperties;
}