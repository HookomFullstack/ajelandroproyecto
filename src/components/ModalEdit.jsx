/* eslint-disable react/prop-types */
import { Modal, ModalBody, ModalContent } from "@nextui-org/react"

export const ModalEdit = ({
    isOpen,
    close,
    userData,
    users,
    setUser
}) => {
    const {id, name, date, typeContract, status} = userData
    
    const newUserEdit = (e) => {
        const newValueUser = e.target.value

        const userFilter = users?.map(e => {
            if(e.id === id) e.status = newValueUser
            return e
        })

        setUser(userFilter)

    }

    return (
    <Modal 
        isOpen={isOpen} 
        onClose={() => close(e => !e)}
        placement="top-center"
        size='5xl'
>
        <ModalContent>
        {() => (
            <>
            <ModalBody className="p-5">
            <div className="flex w-full gap-2">
                    <div>
                        <label htmlFor="id">Cliente</label>
                        <input 
                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                            type="text" 
                            inputMode="text" 
                            value={id}
                            disabled
                        />
                    </div>
                    <div>
                        <label htmlFor="id">Abogado</label>
                        
                        <input 
                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                            type="text" 
                            value={name}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Fecha</label>
                        <input 
                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                            type="text" 
                            value={date}
                        />
                    </div>
                    <div>
                    <label htmlFor="gender">Tipo De Caso</label>
                    <input 
                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                            type="text" 
                            value={typeContract}
                        />
                    </div>
                    <div>
                        <label htmlFor="gender">Estatus</label>
                        <select 
                            onChange={(e) => newUserEdit(e) }
                            className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
                            defaultValue={status}>
                            <option value={'Activo'}>Activo</option>
                            <option value={'Finalizado'}>Finalizado</option>
                        </select>
                    </div>
        
                </div>
            </ModalBody>
            </>
        )}
        </ModalContent>
    </Modal>
  )
}
