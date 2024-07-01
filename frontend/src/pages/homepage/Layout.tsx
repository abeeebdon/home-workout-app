import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { bottomNavbar } from '../../components/data'

const Layout = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full h-full bg-white text-[1rem]">
      <article className="flex justify-between items-center p-4">
        <div className="text-[#6C8EEF] pt-4">
          <h2 className="text-[#343A40]">Hi John!</h2>
          <p>Let’s get to work</p>
        </div>

        <div onClick={() => navigate('/profile')}>
          <img src="/images/profile.png" alt="profile img" />
        </div>
      </article>
      <Outlet />
      <footer className="w-full max-w-[500px] py-4 fixed bottom-0 bg-white">
        <div className="flex justify-center items-center bg-white">
          <section className="w-full flex justify-around items-center">
            {bottomNavbar.map((data, index) => {
              return (
                <NavLink to={data.target}>
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="h-[30px] flex justify-center items-center pb-4">
                      {data.icon}
                    </div>
                    <span>{data.name}</span>
                  </div>
                </NavLink>
              )
            })}
          </section>
        </div>
      </footer>
    </section>
  )
}

export default Layout
