import { BiUser } from '@react-icons/all-files/bi/BiUser'
import { colors } from '../../../../../../constants/colors'
import { Container, Picture } from './styles'

export const Profile = ({ pictureUrl }: { pictureUrl: string }) => {
  return (
    <Container>
      {!!pictureUrl ? (
        <Picture src={pictureUrl} />
      ) : (
        <BiUser size={24} color={colors.black} />
      )}
    </Container>
  )
}
