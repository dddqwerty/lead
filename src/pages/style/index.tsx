import { Typography, Button } from 'components'
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
      <Link href={'/style/work'}>
        <a>
          <Typography variant="body-bold" className="text-primary-black hover:underline">
            Go to Workers page 
          </Typography>
        </a>
      </Link>
      <Link href={'/style/text'}>
        <a>
          <Typography variant="body-bold" className="text-primary-black hover:underline">
            Go to the text page
          </Typography>
        </a>
      </Link>
      <Link href={'/style/goals'}>
        <a>
          <Typography variant="body-bold" className="text-primary-black hover:underline">
            Go to the goals page
          </Typography>
        </a>
      </Link>
      <Link href={'/style/req'}>
        <a>
          <Typography variant="body-bold" className="text-primary-black hover:underline">
            Go to the Requirements page
          </Typography>
        </a>
      </Link>
      <Link href={'/style/list'}>
        <a>
          <Typography variant="body-bold" className="text-primary-black hover:underline">
            Go to the List page
          </Typography>
        </a>
      </Link>
      <Link href={'/style/test'}>
        <a>
          <Typography variant="body-bold" className="text-primary-black hover:underline">
            Go to the test page
          </Typography>
        </a>
      </Link>
      <Link href={'/style/prob'}>
        <a>
          <Typography variant="body-bold" className="text-primary-black hover:underline">
            Go to the prob page
          </Typography>
        </a>
      </Link>
      <div className='flex gap-2'>
        <Button variant='fill'>
          <Typography variant='body' className='text-white'>
            Товчлуур
          </Typography>
        </Button>
        <Button variant='ghost'>
          <Typography variant='body' className='text-black-light'>
            Товчлуур
          </Typography>
        </Button>
        <Button variant='text'>
          <Typography variant='body' className='text-black-light'>
            Товчлуур
          </Typography>
        </Button>
        <Button variant='link'>
          <Typography variant='body' className='text-black-light'>
            Товчлуур
          </Typography>
        </Button>
      </div>

      <Link href={'/style/land'}>
        <a>
          <Typography variant="body-bold" className="text-primary-black hover:underline">
            Go to Animation
          </Typography>
        </a>
      </Link>
    </div>
  )
}
