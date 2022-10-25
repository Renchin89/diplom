import { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { Button } from '@material-ui/core'

interface Props {
  className?: string
}

const NewComp: FunctionComponent<Props> = ({ className }) => {

  return (
    <div className={cn(className, 'flex')} />
  )
}

export default NewComp
