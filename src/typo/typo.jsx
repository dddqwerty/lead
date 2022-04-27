export const Typo = (props) => {
  const { variant, className = '', children } = props

  const getClasses = (props) => {
    switch (props) {
      case 'h1':
        return 'font-bold text-h1'
      case 'h2':
        return 'font-bold text-h2'
      case 'h3':
        return 'font-bold text-h3'
      case 'h4':
        return 'font-bold text-h4'
      case 'h5':
        return 'font-bold text-h5'
      case 'subh':
        return 'font-normal text-subh'
    }
  }

  return (
    <>
      <div className={`${getClasses(variant)} ${className}`}> {children} </div>
    </>
  )
}

export default Typo
