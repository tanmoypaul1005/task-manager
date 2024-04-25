import tw from 'tailwind-styled-components'
import Image from 'next/image'
import rocketIllustration from '@/common/assets/img/rocket.png'
import { Button } from '@/common/ui/button'
import { useAppDispatch, useAppSelector } from '@/common/hooks/useRedux'
import { mainActions } from '@/common/store/slices/main'

export function WelcomeCard() {

  const { tables, selectedTableIndex } = useAppSelector((x) => x.mainSlice)
  const dispatch = useAppDispatch()


  const handleOnSelect = (index: number) => () => {
    dispatch(mainActions.updateSelectedTableIndex({ tableIndex: index }))
  }

  return (
    <Wrapper>
      <RocketImage src={rocketIllustration} alt="Rocket illustration" />
      <Title>
        Hi 👋 <br />
        Welcome to Your Personal Task Manager
      </Title>
      <Description>
        Streamline your tasks with our task manager. Stay organized, prioritize
        your to-do list, and track progress all in one place. Boost productivity
        and achieve your goals effortlessly.
      </Description>
      <GetStartedButton onClick={()=>{handleOnSelect(1)}}>Get started</GetStartedButton>
    </Wrapper>
  )
}

const Wrapper = tw.div`
p-7
rounded-md
bg-white
dark:bg-[#2b2c37]
mx-auto
text-gray-800
dark:text-white
text-center
`

const RocketImage = tw(Image)`
mx-auto
max-w-[180px]
mb-7
`

const Title = tw.h2`
font-bold
text-xl
mb-5
`

const Description = tw.p`
text-base
max-w-md
mb-7
`

const GetStartedButton = tw(Button)`
px-5
`
