import { useAccount } from 'wagmi'
import { tw } from 'typewind'

import { Account, Connect, NetworkSwitcher } from './components'

export function App() {
  const { isConnected } = useAccount()

  return (
    <>
      <h1
        className={tw
          .text_4xl
          .accent_amber_100
        }
      >wagmi + Vite</h1>

      <Connect />

      {isConnected && (
        <>
          <Account />
          <hr />
          <hr />
          <NetworkSwitcher />
        </>
      )}
    </>
  )
}
