import { Avatar, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.png';
export const LayoutDashboard = ({children}) => {
  return (
    <div className="bg-[#d9dbe0] ">

    <Navbar 
      isBordered
      
      className={"bg-[#1f2458] text-white" }
    >
          <NavbarBrand>
            <div>
                <Image src={logo}  alt="logo" width={60}/>
            </div>
          </NavbarBrand>
      <NavbarContent justify="center"  >

            <NavbarItem>
                <NavLink end to="/dashboard" className={ ( {isActive }) => isActive ? 'bg-purple-500 rounded p-2' : ''} >
                    Inicio
                </NavLink>
            </NavbarItem>

            <NavbarItem>
              <NavLink end to="/dashboard/cases" className={ ( {isActive }) => isActive ? 'bg-purple-500 rounded p-2'  : ''}>
                  casos
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink end to="/dashboard/clients" className={ ( {isActive }) => isActive ? 'bg-purple-500 rounded p-2'  : ''}>
                  clientes
              </NavLink>
            </NavbarItem>      


        
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Avatar isBordered color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
        {children}
    </div>
  )
}
