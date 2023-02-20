import { IUser } from '@/contexts/UserContext'
import { Container, Letter, Picture } from './styles'

export const Profile = ({
  user, onClick
}: { user: IUser["user"], onClick: () => void }) => {
  return (
    <Container onClick={onClick}>
      {!!user!?.avatar ? (
        <Picture src={user!?.avatar} />
      ) : (
        <Letter>{user?.firstName.substring(0, 1)}</Letter>
      )}
    </Container>
  )
}
