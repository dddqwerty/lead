import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsDiscord } from 'react-icons/bs'

export const handleIcon = ({ icon, size = 24, className = '' }) => {
  switch (icon) {
  case 'instagram':
    return <BsInstagram className={className} style={{ width: size, height: size }} />
  case 'twitter':
    return <BsTwitter className={className} style={{ width: size, height: size }} />
  case 'discord':
    return <BsDiscord className={className} style={{ width: size, height: size }} />
  case 'facebook':
    return <FaFacebookF className={className} style={{ width: size, height: size }} />
  default:
    return <></>
  }
}
