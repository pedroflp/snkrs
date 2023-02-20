import { Button } from '@/components/Button'
import { ButtonThemesEnum } from '@/components/Button/types'
import { Loader } from '@/components/Loading/styles'
import { routeNames } from '@/constants/routeNames'
import { BsBag } from '@react-icons/all-files/bs/BsBag'
import { BsBagFill } from '@react-icons/all-files/bs/BsBagFill'
import { useAuth, useAuthState } from '@saleor/sdk'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { Profile } from './components/Profile'
import { Container, Content, IconButton, InteractiveButtons, Logo } from './styles'

export const Header = () => {
  const { pathname, push } = useRouter();
  const { user, authenticating } = useAuthState();
  const { logout } = useAuth();

  const BagButton = useCallback(() => {
    const isInBagPage = pathname === routeNames.bag;
    return (
      <IconButton>
        {isInBagPage ? <BsBagFill size={22} /> : <BsBag size={22} />}
      </IconButton>
    )
  }, [pathname]);

  return (
    <Container>
      <Logo href={routeNames.home}>SNKRS</Logo>

      <Content>
        <InteractiveButtons>
          <BagButton />
        </InteractiveButtons>

        { authenticating ? <Loader size={22} /> :
          !!user ? (
          <Profile user={user} onClick={logout} />
        ) : (
          <Button
            theme={ButtonThemesEnum.primary}
            style={{ width: 100, height: 45 }}
            onClick={() => push(routeNames.account.auth)}
          >
            Entrar
          </Button>
        )}
      </Content>
    </Container>
  )
}
