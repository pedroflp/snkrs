import { routeNames } from '@/constants/routeNames';
import { BaseLayout } from '@/layout/BaseLayout';
import { useRouter } from 'next/router';
import React from 'react';

// import { Container } from './styles';

const Confirmation: React.FC = () => {
  const { push, query: { email } } = useRouter();

  if (!email) push(routeNames.home);

  return (
    <BaseLayout>
      <h1>Um email de confirmação de cadastro de conta foi enviado para</h1>
      <h2>{email}</h2>
    </BaseLayout>
  );
}

export default Confirmation;