import { useEffect } from 'react'
import Head from 'next/head'
import tw from "tailwind-styled-components"
import Map from './components/Map'


export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" alt=""/>
          <Profile>
            <Name>Yokesh</Name>
            <UserImage src="https://media-exp1.licdn.com/dms/image/C5603AQHk0b-ea3ENLA/profile-displayphoto-shrink_200_200/0/1635929694279?e=1641427200&v=beta&t=-qScfLJ--srZ3O-aYQbh7Zn0Cdp_LCaH68FlaGKDiTs"/>
          </Profile>
        </Header>

        <ActionButtons>
          
        </ActionButtons>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header= tw.div`
  flex justify-between items-center 
` 

const UberLogo = tw.img`
  h-20 
`

const Profile = tw.div`
  flex items-center
`

const Name = tw.div`
  mr-4 w-20 text-small
`

const UserImage = tw.img`
  h-12 w-12 rounded-full border-grey-200 p-px
`

