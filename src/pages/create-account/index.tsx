import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import { routeNames } from '@/constants/routeNames';
import { useCreateAccountMutation } from '@/graphql/generated/grapgql';
import { BaseLayout } from '@/layout/BaseLayout';
import { apiErrorInterpretor } from '@/utils/apiErrorInterpretor';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react';
import { Container, ErrorMessager, PasswordFields } from './styles';

const CreateAccount: React.FC = () => {
  const router = useRouter();

  const [{ fetching }, createAccountMutation] = useCreateAccountMutation();

  const [userAccount, setUserAccount] = useState({
    name: '', email: '', password: '', passwordConfirmation: ''
  });
  const [authError, setAuthError] = useState<{
    field: string, code: string
  }[]>([]);

  const handleCreateAccount = useCallback(async () => {
    setAuthError([]);
    const { data } = await createAccountMutation(({
      email: userAccount.email,
      firstName: userAccount.name,
      password: userAccount.password
    }));

    if (data?.accountRegister?.errors) return setAuthError(data?.accountRegister?.errors as any)
    if (data?.accountRegister?.user) router.push(`${routeNames.account.confirmation}/?email=${data?.accountRegister?.user.email}`);

    // if (data?.accountRegister?.user) {
    //   const { data: authData } = await authLoginMutation(({
    //     email: userAccount.email,
    //     password: userAccount.password
    //   }));

    //   if (authData?.tokenCreate?.errors.length) {
    //     return; // display error
    //   }
      
    //   storeUser({
    //     name: userAccount.name,
    //     email: userAccount.email,
    //     token: authData!?.tokenCreate!?.token,
    //     refreshToken: authData!?.tokenCreate!?.refreshToken
    //   });

    //   localStorage.setItem('snkrs@token', JSON.stringify(authData?.tokenCreate?.token));
      // router.push(routeNames.home);
    // }
  }, [userAccount]);

  const schemaValidation = useMemo(() => { 
    const nameMinLength = userAccount.name.length >= 3;
    const passwordMinLength = userAccount.password.length >= 8;
    const passwordMatch = userAccount.password === userAccount.passwordConfirmation;
    const isValidEmail = userAccount.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    return {
      isCompletedAndValid: passwordMatch &&
        passwordMinLength &&
        isValidEmail &&
        nameMinLength,
      errors: {
        nameMinLength: userAccount.name.length && !nameMinLength ? 'Nome deve ter no mínimo 3 caracteres' : '',
        passwordMinLength:  userAccount.password.length && !passwordMinLength ? 'Senha deve ter no mínimo 8 caracteres' : '',
        passwordMatch:  userAccount.password.length && userAccount.passwordConfirmation.length && !passwordMatch ? 'Senhas devem ser iguais' : '',
        email:  userAccount.email.length && !isValidEmail ? 'Email não é válido' : ''
      }
    }
  }, [userAccount]);
  
  return (
    <BaseLayout>
      <Head><title>Criar Conta</title></Head>
      <Container>
        <InputField
          placeholder='Nome'
          onChange={(value) => setUserAccount(u => ({...u, name: value}))}
          value={userAccount.name}
          error={schemaValidation.errors.nameMinLength}
          style={{ height: 50, width: 400 }}
        />
        <InputField
          placeholder='Email'
          onChange={(value) => setUserAccount(u => ({...u, email: value}))}
          value={userAccount.email}
          inputType="email"
          error={schemaValidation.errors.email}
          style={{ height: 50, width: 400 }}

        />
        <PasswordFields>
          <InputField
            placeholder='Senha'
            onChange={(value) => setUserAccount(u => ({...u, password: value}))}
            value={userAccount.password}
            inputType="password"
            error={schemaValidation.errors.passwordMinLength}
            style={{ height: 50 }}

          />
          <InputField
            placeholder='Confirmar senha'
            onChange={(value) => setUserAccount(u => ({...u, passwordConfirmation: value}))}
            value={userAccount.passwordConfirmation}
            inputType="password"
            error={schemaValidation.errors.passwordMatch}
            style={{ height: 50 }}

          />
        </PasswordFields>
        <Button
          style={{ height: 50, width: 400, marginTop: 24 }}
          theme='primary'
          isLoading={fetching}
          onClick={handleCreateAccount}
          disabled={!schemaValidation.isCompletedAndValid}
        >
          Criar conta
        </Button>
        {authError?.length > 0 && (
          <ErrorMessager>
            {authError.map(error => apiErrorInterpretor(error.field, error.code))}
          </ErrorMessager>
        )}
      </Container>
    </BaseLayout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return ({
    props: {},
    revalidate: 60 * 60 * 60
  })
}

export default CreateAccount;