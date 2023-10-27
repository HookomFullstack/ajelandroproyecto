import { useEffect } from "react"
import { LayoutDashboard } from "./LayoutDashboard";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";
import axios from "axios";


const columns = [
    {
      key: "id",
      label: "id",
    },
    {
      key: "name",
      label: "nombre",
    },
    {
      key: "date",
      label: "fecha",
    },
    {
      key: "mount",
      label: "monto",
    },
    {
      key: "typeContract",
      label: "tipo contrato",
    },
    {
      key: "status",
      label: "status",
    },
  ];
const columns2 = [
    {
      key: "id",
      label: "id",
    },
    {
      key: "name",
      label: "nombre",
    },
    {
      key: "lastName",
      label: "apellido",
    },
    {
      key: "phone",
      label: "telefono",
    },
    {
      key: "mountPay",
      label: "monto pagado",
    },
    {
      key: "email",
      label: "correo",
    },
    {
        key: "employment",
        label: "empleo"
    }
  ];


  
  const userRecents = JSON.parse(localStorage.getItem('auth'))?.flat()[0]?.dataUser?.filter( (e, i) => i <= 5 )
  const expedentsRecents = [...Array(1)]?.map(e => e = userRecents?.map(({id, name, cases}) => {
    
    const {date, mount, typeContract, status} = cases
    
    return {id, name, date, mount, typeContract, status }
  }))?.flat()

  export const Index = () => {

    return (
        <LayoutDashboard>
            <div className="p-10 flex flex-col gap-6">
                <div className="flex justify-between gap-10">
                    
                    <div className="bg-white rounded-[5px] p-5 shadow-md w-full border-[1px] border-[#C4CEDC]">
                    <p className="text-[30px] font-semibold mb-5">Expedientes recientes</p>
                        <Table shadow={'none'} aria-label="Example table with dynamic content">
                            <TableHeader  columns={columns}>
                                {(column) => <TableColumn className="text-left bg-[#1F2559] text-white  px-3" key={column.key}>{column.label}</TableColumn>}
                            </TableHeader>
                            <TableBody items={expedentsRecents}>
                                {(item) => (
                                <TableRow key={item.id}>
                                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                    <div className="bg-white rounded-[5px] p-5 w-full shadow-md border-[1px] border-[#C4CEDC]">
                    <p className="text-[30px] font-semibold mb-5">Clientes recientes</p>
                        <Table shadow={'none'} aria-label="Example table with dynamic content">
                            <TableHeader  columns={columns2}>
                                {(column) => <TableColumn className="text-left bg-[#1F2559] text-white  px-3" key={column.key}>{column.label}</TableColumn>}
                            </TableHeader>
                            <TableBody items={userRecents}>
                                {(item) => (
                                <TableRow key={item.key}>
                                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                
            </div>
        </LayoutDashboard>
    )
}
