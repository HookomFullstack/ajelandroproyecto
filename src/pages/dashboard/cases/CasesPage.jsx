import { Modal, ModalBody, ModalHeader, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Textarea, button, getKeyValue } from "@nextui-org/react";
import { LayoutDashboard } from "../LayoutDashboard"
import { useMemo, useState } from "react";

const columns = [
  {
    key: "id",
    label: "Clientes",
  },
  {
    key: "name",
    label: "Abogado",
  },
  {
    key: "date",
    label: "Fecha",
  },
  {
    key: "typeContract",
    label: "tipo contrato",
  },
  {
    key: "status",
    label: "status",
  },
  
  {
    key: "edit",
    label: "editar",
  }
  
];
const userRecents = JSON.parse(localStorage.getItem('auth'))?.flat()[0]?.dataUser
const users = [...Array(1)]?.map(e => e = userRecents?.map(({id, name, cases}) => {
  const {date, mount, typeContract, status } = cases
  const edit = (
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
      </button>
    )

  return {id, name, date, mount, typeContract, status, edit }
}))?.flat()

export const CasesPage = () => {
  
  const [page, setPage] = useState(1);
  const rowsPerPage = 17;
  
  const pages = Math.ceil(users.length / rowsPerPage);

  const rows = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);
  const [state, setstate] = useState(false);
  
  
  return (
    <LayoutDashboard>
    <div className="p-10 flex flex-col gap-6">
        <div className="bg-white rounded-[5px] shadow-md p-5 w-full border-[1px] border-[#C4CEDC]">
           <p className="text-[30px] font-semibold mb-5">Listado de expedientes</p>
              <div className="flex justify-end">
                <button className="bg-[#1F2559] text-white rounded-[5px] px-4 py-2  font-semibold flex justify-center items-center" onClick={()=>setstate(true)}> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>Creatre
                </button>
              </div>
             <Table 
            shadow="none"     
              aria-label="Example table with client side pagination"
              bottomContent={
                <div className="flex w-full justify-center">
                  <Pagination 
                    isCompact
                    showControls
                    showShadow
                    color="secondary"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                  />
                </div>
              }
              classNames={{
                wrapper: "min-h-[222px]",
              }}
            >
              <TableHeader  columns={columns}>
                  {(column) => <TableColumn className="text-left bg-[#1F2559] text-white  px-3" key={column.key}>{column.label}</TableColumn>}
              </TableHeader>
              <TableBody items={rows}>
                  {(item) => (
                  <TableRow key={item.key}>
                      {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                  </TableRow>
                  )}
              </TableBody>
          </Table>
        </div>
        {/* {
          state &&(
                    <div className="fixed inset-0 bg-black bg-opacity-30 blackdrop-blur-ms flex justify-center items-center">
                    <div className="bg-white p-4 rounded flex flex-col justify-center items-center h-[82%] w-[50%]">  
                    <p className="text-[30px] font-semibold text-[#313436]">Registro De Caso</p>
                    <form className="flex gap-2 w-full flex-col">
                      <div className="flex flex-col">
                        <div>
                            <label htmlFor="nombre">Cedula</label>
                            <input 
                                className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                id="nombre"
                                type="text" 
                                name="name"
                                inputMode="text" 
                                placeholder="Introduce tu nombre"
                            />
                        </div>
                        <div>
                            <label htmlFor="id">Fecha de Inicio</label>
                            <input 
                                className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                id="id"
                                type="month" 
                                name="id"
                                inputMode="numeric" 
                                placeholder="Introduce tu cédula"
                            />
                        </div>
                        <div>

                            <label htmlFor="phone">Estatus</label>
                            <select 
                            className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
                            name="gender" 
                            id="gender" 
                            defaultValue={'activo'}>
                            <option value={'activo'}>Activo</option>
                            <option value={'finalizado'}>Finalizado</option>
                        </select>
                        </div>
                        <div>
                        <label htmlFor="gender">Tipo De Caso</label>
                        <select 
                            className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
                            name="gender" 
                            id="gender" 
                            defaultValue={'demandado'}>
                            <option value={'demandado'}>Demandado</option>
                            <option value={'denunciante'}>Denunciante</option>
                        </select>
                        </div>
                        <div>
                            <label htmlFor="gender">Caso</label>
                            <select 
                                className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
                                name="gender" 
                                id="gender" 
                                defaultValue={'permiso'}>
                                <option value={'permiso'}>Permiso</option>
                                <option value={'patente'}>Patente</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="gender">Abogado</label>
                            <select 
                                className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
                                name="gender" 
                                id="gender" 
                                defaultValue={''}>
                                <option value={''}>Permiso</option>
                                <option value={''}>Patente</option>
                            </select>
                        </div>
                      </div>
                      <div>
                          <Textarea
                              isRequired
                              label="Detalles Del Caso"
                              labelPlacement="outside"
                              placeholder="Enter your description"
                              className=""/>
                      </div>
                      <div className="flex justify-between">
                      <button className="border-[1px] py-3 px-2 rounded-[5px] bg-red-500 text-white font-semibold" type="submit" onClick={()=>setstate(false)}>Cancelar</button>
                      <button className="border-[1px] py-3 px-2 rounded-[5px] bg-[#4a57ca] text-white font-semibold" type="submit" onClick={()=>setstate(false)}>Registrarse</button>
                      </div>
                    </form>
                    </div>
                  </div>
          )
        } */}
        <Modal 

          isOpen={state}
        >
          <ModalBody>
            <div className="fixed inset-0 bg-black bg-opacity-30 blackdrop-blur-ms flex justify-center items-center">
              <div className="bg-white p-4 rounded flex flex-col justify-center items-center h-[82%] w-[50%]">  
                <p className="text-[30px] font-semibold text-[#313436]">Registro De Caso</p>
                <form className="flex gap-2 w-full flex-col">
                  <div className="flex flex-col">
                    <div>
                        <label htmlFor="nombre">Cedula</label>
                        <input 
                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                            id="nombre"
                            type="text" 
                            name="name"
                            inputMode="text" 
                            placeholder="Introduce tu nombre"
                        />
                    </div>
                    <div>
                        <label htmlFor="id">Fecha de Inicio</label>
                        <input 
                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                            id="id"
                            type="month" 
                            name="id"
                            inputMode="numeric" 
                            placeholder="Introduce tu cédula"
                        />
                    </div>
                    <div>

                        <label htmlFor="phone">Estatus</label>
                        <select 
                        className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
                        name="gender" 
                        id="gender" 
                        defaultValue={'activo'}>
                        <option value={'activo'}>Activo</option>
                        <option value={'finalizado'}>Finalizado</option>
                    </select>
                    </div>
                    <div>
                    <label htmlFor="gender">Tipo De Caso</label>
                    <select 
                        className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
                        name="gender" 
                        id="gender" 
                        defaultValue={'demandado'}>
                        <option value={'demandado'}>Demandado</option>
                        <option value={'denunciante'}>Denunciante</option>
                    </select>
                    </div>
                    <div>
                        <label htmlFor="gender">Caso</label>
                        <select 
                            className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
                            name="gender" 
                            id="gender" 
                            defaultValue={'permiso'}>
                            <option value={'permiso'}>Permiso</option>
                            <option value={'patente'}>Patente</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="gender">Abogado</label>
                        <select 
                            className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
                            name="gender" 
                            id="gender" 
                            defaultValue={''}>
                            <option value={''}>Permiso</option>
                            <option value={''}>Patente</option>
                        </select>
                    </div>
                  </div>
                  <div>
                      <Textarea
                          isRequired
                          label="Detalles Del Caso"
                          labelPlacement="outside"
                          placeholder="Enter your description"
                          className=""/>
                  </div>
                  <div className="flex justify-between">
                  <button className="border-[1px] py-3 px-2 rounded-[5px] bg-red-500 text-white font-semibold" type="submit" onClick={()=>setstate(false)}>Cancelar</button>
                  <button className="border-[1px] py-3 px-2 rounded-[5px] bg-[#4a57ca] text-white font-semibold" type="submit" onClick={()=>setstate(false)}>Registrarse</button>
                  </div>
                </form>
              </div>
            </div>
          </ModalBody>
        </Modal>
    </div>
  </LayoutDashboard>
  )
}
