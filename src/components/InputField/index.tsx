import { Loader } from "../Loading/styles"
import { Container, Error, Field, Input, Loading } from "./styles"
import { InputFieldProps } from "./types"

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  onChange,
  value,
  isLoading,
  error,
  ...rest  
}) => {
  return (
    <Container>
      <Field>
        <Input
          {...rest}
          value={value}
          placeholder={placeholder}
          disabled={isLoading}
          onChange={e => onChange(e.target.value)}
          isLoading={isLoading}
          error={error}
        />
        {isLoading && <Loading><Loader size={20} /></Loading>}
      </Field>
      {!!error && <Error>{error}</Error>}
    </Container>
  )
}
