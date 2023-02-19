export type InputFieldProps = {
  value: any;
  onChange: (value: any) => void;
  placeholder?: string;
  isLoading?: boolean;
  maxLength?: number;
  error?: string | null;
}