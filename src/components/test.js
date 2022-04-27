import Typo from 'typo/typo'

export const HelloWorld = () => {
  return (
    <>
      <h1 className="text-secondary-light text-2xl"> Hello World</h1>
      <br />
      <Typo variant="h1" className="text-yellow-500">
        {' '}
        Hello there{' '}
      </Typo>
    </>
  )
}

export default HelloWorld
