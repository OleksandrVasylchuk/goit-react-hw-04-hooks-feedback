 import PropTypes from 'prop-types';
import { Div } from './Notification.styled'

export default function Notification({message}) {
  return (
    <Div>{message}</Div>
  )
}
Notification.proTotypes = {
  message: PropTypes.string.isRequired 
}
