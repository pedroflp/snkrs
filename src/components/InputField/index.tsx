import { AiOutlineEye } from '@react-icons/all-files/ai/AiOutlineEye'
import { AiOutlineEyeInvisible } from '@react-icons/all-files/ai/AiOutlineEyeInvisible'
import { useMemo, useState } from 'react'
import { Button } from '../Button'
import { Loader } from "../Loading/styles"
import { Container, Error, Field, Input, RightChildren } from "./styles"
import { InputFieldProps } from "./types"

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  onChange,
  value,
  isLoading,
  error,
  inputType,
  style,
  ...rest  
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const type = useMemo(() => {
    if (inputType === "password") return !isPasswordVisible ? inputType : "text"

    return inputType
  }, [inputType, isPasswordVisible])

  return (
    <Container>
      <Field
        style={style}
      >
        <Input
          {...rest}
          value={value}
          placeholder={placeholder}
          disabled={isLoading}
          onChange={e => onChange(e.target.value)}
          isLoading={isLoading}
          error={error}
          type={type}
        />
        <RightChildren>
          {inputType === "password" && (
            <Button theme='transparent' style={{ padding: 0 }} onClick={() => setIsPasswordVisible(prev => !prev)}>
             {!isPasswordVisible ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
            </Button>
          )}
          {isLoading && <Loader size={20} />}
        </RightChildren>
      </Field>
      {!!error && <Error>{error}</Error>}
    </Container>
  )
}
