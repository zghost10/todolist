import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon: React.FC<{name: any}> = ({name}) => {
  return (<FontAwesomeIcon icon={name} />)
}