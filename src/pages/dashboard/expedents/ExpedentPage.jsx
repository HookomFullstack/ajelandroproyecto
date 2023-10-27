import { Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";
import { LayoutDashboard } from "../LayoutDashboard"
import { useMemo, useState } from "react";
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
  

const users = JSON.parse(localStorage.getItem('auth'))?.flat()[0]?.dataUser

export const ClientPage = () => {
    
  const [page, setPage] = useState(1);
  const rowsPerPage = 17;

  const pages = Math.ceil(users.length / rowsPerPage);

  const rows = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

    return (
        <LayoutDashboard>
          <div className="p-10 flex flex-col gap-6">
              <div className="bg-white rounded-[5px] shadow-md p-5 w-full border-[1px] border-[#C4CEDC]">
                <p className="text-[30px] font-semibold mb-5">Historial de clientes</p>

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
          </div>
        </LayoutDashboard>
    )
}
