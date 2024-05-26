import React from 'react'

import PlaceCard from './PlaceCard'
import { fetchSolplaceLogsQuery } from '@/service/solo'
import styles from './Solo.module.css'
import WriteButton from './WriteButton'
import PlaceCardList from './PlaceCard/PlaceCardList'

const Solo = () => {
  const [a, b] = React.useState<any>([])
  const c = async () => {
    const res = await fetchSolplaceLogsQuery()
    console.log('asdsad', res);
    b(res.fetchSolplaceLogs)
  }
  React.useEffect(() => {
    c()
  }, [])
  return (
    <div>
      <PlaceCardList list={a} />
      <WriteButton />
    </div>
  )
}
export default Solo

// "["https://develop.cdn.solotrip.kr/2024/04/19/m/23f3190a-9fba-4403-b27e-82182a07d932.webp",
// "https://develop.cdn.solotrip.kr/2024/04/19/m/85e94695-6fbc-46cb-9a45-4c6fab52826f.webp"]"