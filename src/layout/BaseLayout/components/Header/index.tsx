import { Button } from '@/components/Button'
import { ButtonThemesEnum } from '@/components/Button/types'
import { routeNames } from '@/constants/routeNames'
import useUser from '@/hooks/useUser'
import { BsBag } from '@react-icons/all-files/bs/BsBag'
import { BsBagFill } from '@react-icons/all-files/bs/BsBagFill'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { Profile } from './components/Profile'
import { Container, Content, IconButton, InteractiveButtons, Logo } from './styles'

export const Header = () => {
  const { pathname, push } = useRouter();
  const { user } = useUser();

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

        {!!user ? (
          <Profile user={user} />
        ) : (
          <Button
            theme={ButtonThemesEnum.primary}
            style={{ width: 100, height: 45 }}
            onClick={() => push(routeNames.account.creation)}
          >
            Entrar
          </Button>
        )}
      </Content>
    </Container>
  )
}
