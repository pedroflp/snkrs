import { IUser } from '@/contexts/UserContext'
import { Container, Letter, Picture } from './styles'

export const Profile = ({ user }: { user: IUser["user"] }) => {
  return (
    <Container>
      {!!user!?.photo ? (
        <Picture src={user!?.photo} />
      ) : (
        <Letter>{user?.name.substring(0, 1)}</Letter>
      )}
    </Container>
  )
}
