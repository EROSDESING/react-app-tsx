import { Suspense } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom'
import logo from '../logo.svg'
// import { LazyPage1, LazyPage3, LazyPage2 } from '../01-lazyLoad/pages'
import { routes } from './routes'

export const Navigation = () => {
  return (
    <Suspense fallback={<h2>Loading ...</h2>}>

    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="" />
          <ul>
            {/* TODO: crear navLink dinamicos */}
            {routes.map(({ to, name }, index) => {
              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {name}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        <Routes>
          {routes.map(({ path, Component, to }) => {
            return <Route key={to} path={path} element={<Component />} />
          })}

          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
    </Suspense>
  )
}
