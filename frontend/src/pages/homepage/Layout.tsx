import { NavLink, Outlet } from 'react-router-dom'
import { bottomNavbar } from '../../components/data'

const Layout = () => {
  return (
    <section className="w-full h-full bg-white text-[1rem]">
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
