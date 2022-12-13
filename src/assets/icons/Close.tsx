import { FunctionComponent } from 'react'

interface Props {
  className?: string
  fill?: string
  stroke?: string
  onClick?: () => void
}

const CloseIcon: FunctionComponent<Props> = ({ fill = 'none', stroke = 'currentColor', className, onClick }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={className} fill={stroke} width='24' height='24' onClick={onClick}>
    <line fill={fill} stroke={stroke} strokeWidth='1.5px' strokeLinecap='round' strokeLinejoin='round' x1='15.7' y1='8.3' x2='8.3' y2='15.7' />
    <line fill={fill} stroke={stroke} strokeWidth='1.5px' strokeLinecap='round' strokeLinejoin='round' x1='8.3' y1='8.3' x2='15.7' y2='15.7' />
  </svg>
)

export default CloseIcon
