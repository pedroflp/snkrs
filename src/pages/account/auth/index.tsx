import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import { routeNames } from '@/constants/routeNames';
import { BaseLayout } from '@/layout/BaseLayout';
import { useAuth, useAuthState } from '@saleor/sdk';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { Container, CreateAccountRedirect, ErrorMessager } from './styles';

const CreateAccount: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const { authenticated, authenticating } = useAuthState();

  if (authenticated) router.push(routeNames.home);

  const [userAccount, setUserAccount] = useState({
    email: '', password: ''
  });
  const [authError, setAuthError] = useState('');

  const handleAuth = useCallback(async () => {
    setAuthError('');
    const { data } = await login(({
      email: userAccount.email,
      password: userAccount.password
    }));
    const errors = data?.tokenCreate?.errors;

    if (errors?.length) {
      return setAuthError(errors[0].message as string);
    }

    router.push(routeNames.home);
  }, [userAccount]);

  return (
    <BaseLayout>
      <Head><title>Criar Conta</title></Head>
      <Container>
        <InputField
          placeholder='Email'
          onChange={(value) => setUserAccount(u => ({...u, email: value}))}
          value={userAccount.email}
          inputType="email"
          style={{ height: 50, width: 400 }}

        />
        <InputField
          placeholder='Senha'
          onChange={(value) => setUserAccount(u => ({...u, password: value}))}
          value={userAccount.password}
          inputType="password"
          style={{ height: 50, width: 400 }}
        />
        <Button
          style={{ height: 50, width: 400, marginTop: 24 }}
          theme='primary'
          isLoading={authenticating}
          onClick={handleAuth}
        >
          Entrar
        </Button>
        <CreateAccountRedirect href={routeNames.account.creation}>Cadastre-se</CreateAccountRedirect>
        {authError?.length > 0 && (
          <ErrorMessager>
            {authError}
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