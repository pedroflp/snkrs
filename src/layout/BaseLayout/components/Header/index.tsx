import { Button } from '@/components/Button'
import { ButtonThemesEnum } from '@/components/Button/types'
import { routeNames } from '@/constants/routeNames'
import { BsBag } from '@react-icons/all-files/bs/BsBag'
import { BsBagFill } from '@react-icons/all-files/bs/BsBagFill'
import { HiHeart } from '@react-icons/all-files/hi/HiHeart'
import { HiOutlineHeart } from '@react-icons/all-files/hi/HiOutlineHeart'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { Profile } from './components/Profile'
import { Container, Content, IconButton, InteractiveButtons, Logo } from './styles'

export const Header = () => {
  const { pathname } = useRouter();
  const isLogged = true;

  const FavoriteButton = useCallback(() => {
    const isInFavoritePage = pathname === routeNames.favorited
    return (
      <IconButton>
        {isInFavoritePage ? <HiHeart size={24} /> : <HiOutlineHeart size={24} />}
      </IconButton>
    )
  }, [pathname]);

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
      <Logo>SNKRS</Logo>

      <Content>
        <InteractiveButtons>
          <FavoriteButton />
          <BagButton />
        </InteractiveButtons>

        {isLogged ? (
          <Profile
            pictureUrl="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        ) : (
          <Button
            theme={ButtonThemesEnum.primary}
            style={{ width: 100, height: 50 }}
          >
            Entrar
          </Button>
        )}
      </Content>
    </Container>
  )
}
