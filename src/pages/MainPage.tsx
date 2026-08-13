import Entertainment from '../components/entertainment/Entertainment'
import Iphone from '../components/iphone/Iphone'
import Legal from '../components/legal/Legal'
import Mac from '../components/mac/Mac'
import Section from '../components/section/Section'

export default function MainPage() {
  return (
    <>
      <Mac />
      <Iphone />
      <Section />
      <Entertainment />
      {/* <Legal /> */}
    </>
  )
}
