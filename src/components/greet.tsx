import { memo } from "react"

interface GreetProps {
  name: string
}

const Component: React.VFC<GreetProps> = ({ name }: GreetProps) => {
  return <div>Hello! {name}!</div>
}

export const Greet = memo(Component)
