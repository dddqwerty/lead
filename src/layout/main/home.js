import { Typography } from 'components'

export const Home = () => {
  return (
    <div>
      <div>
        <div>
          <img src="static/lead-Vector-logo.svg" />
          <Typography className="text-primary-main" variant="">
            ХӨТӨЛБӨР
          </Typography>
        </div>
        <div>
          <Typography>
            LEAD Mongolia хөтөлбөр нь төрийн болон төрийн бус байгууллага, хувийн хэвшил зэрэг төрөл бүрийн салбарын
            шинэ залуу манлайлагчдыг нэгтгэн, нийгэмд тулгамдаж буй асуудалд гарц шийдэл олох зорилготой.{' '}
          </Typography>
        </div>
        <div></div>
      </div>
      <div>
        <img src="static/member-circle.svg" />
      </div>
    </div>
  )
}

export default Home
