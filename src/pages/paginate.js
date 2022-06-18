import Link from 'next/link'

export default function Pagination(props) {
  const { totalPages, currentPage, prevDisabled, nextDisabled } = props

  const prevPageUrl = currentPage === '2' ? '/news/page' : `/news/page/${parseInt(currentPage, 10) - 1}`

  const nextPageUrl = `/news/page/${parseInt(currentPage, 10) + 1}`

  return (
    <div className="flex justify-center">
      <ol className="flex">
        <li className="mr-20">
          {prevDisabled && <span className="text-red-500 cursor-not-allowed"> Previous page </span>}
          {!prevDisabled && (
            <Link href={prevPageUrl}>
              <a className="text-primary-main cursor-pointer">Previous page</a>
            </Link>
          )}
        </li>
        <li className="transition duration-700 hover:duration-700 border-2 border-white hover:border-b-primary-main cursor-pointer">
          Page <span className="text-primary-main"> {currentPage} </span> of{' '}
          <span className="text-primary-main"> {totalPages} </span>
        </li>
        <li className="ml-20">
          {nextDisabled && <span className="text-red-500 cursor-not-allowed"> End of the page </span>}
          {!nextDisabled && (
            <Link href={nextPageUrl}>
              <a className="text-primary-main cursor-pointer">Next page</a>
            </Link>
          )}
        </li>
      </ol>
    </div>
  )
}
