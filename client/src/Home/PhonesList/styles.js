import styled from 'styled-components'
import tw from 'tailwind.macro'

/**
 * Responsive num cols wrapper
 */
const ResponsiveWrapper = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/3 p-2`}
`

/**
 * Card for show phone
 */
const PhoneCard = styled.div`
  ${tw`flex flex-row shadow-md bg-white cursor-pointer
      h-48 max-w-xs mx-auto 
      hover:shadow-xl`}
  &:hover {
    transform: scale(1.05);
  }
`

/**
 * Info wrapper
 */
const PhoneCardInfo = styled.section`
  ${tw`flex flex-col pt-6 w-full`}
  h1 {
    ${tw`font-semibold text-xl`}
  }
  h2 {
    ${tw`text-gray-600`}
  }
  footer {
    ${tw`self-end m-6 font-semibold text-secondary text-lg`}
  }
`

export { ResponsiveWrapper, PhoneCard, PhoneCardInfo }
