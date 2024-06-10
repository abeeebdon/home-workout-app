import { NavLink, Outlet } from 'react-router-dom'
import { bottomNavbar } from '../../components/data'

const Layout = () => {
  return (
    <main className="w-full flex justify-center items-center bg-blue-50">
      <div className="w-full max-w-[400px] h-[100vh]">
        <Outlet />
        <footer className="w-full max-w-[400px] p-4 fixed bottom-0 left-0 bg-white">
          <div className="mb-2 flex justify-center items-center">
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
      </div>
    </main>
  )
}

export default Layout
