import { Typography } from 'components'
import Link from 'next/link'

export default function In() {
  return (
    <div>
      <Typography variant="h1" className="text-primary-main">
        Style Guides
      </Typography>
      <Link href={'/style/typo'}>
        <a>
          <Typography variant="body-bold" className="text-primary-black hover:underline">
            Go to Typo page
          </Typography>
        </a>
      </Link>
    </div>
  )
}
