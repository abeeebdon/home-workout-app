import { useState } from 'react'
import ForYou from './ForYou'
import Browse from './Browse'

type incomingData = { btnActive: number }
const HomeBody = (props: incomingData) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('beginner')
  const btnActive = props.btnActive
  // if index is zero if is the for you part
  // if index is 1 it is browse and
  //if index is 2 it is saved
  const handleSelectedLevel = (e: any) => {
    setSelectedLevel(e.target.value)
  }
  if (btnActive === 0) {
    return <ForYou />
  } else if (btnActive === 1) {
    return (
      <Browse
        handleSelectedLevel={handleSelectedLevel}
        selectedLevel={selectedLevel}
      />
    )
  } else {
    return <p>Saved</p>
  }
}

export default HomeBody
