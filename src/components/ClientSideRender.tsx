import { useIsSsr } from "~/hooks/util"
import { Loading } from "./Loading"

type ClientSideRenderProps = React.PropsWithChildren<Record<string, unknown>>

export const ClientSideRender: React.VFC<ClientSideRenderProps> = ({
  children,
}: ClientSideRenderProps) => {
  const isSsr = useIsSsr()

  return isSsr ? <Loading /> : <>{children}</>
}
