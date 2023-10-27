
export const LayoutLogin = ({children}) => {
  return (
    <div className="bg-[#111827]  h-screen w-screen flex items-center justify-center">
        <div className="
            border-[#5c5e61] border-[2px] rounded-[5px] p-[30px] bg-white max-w-[500px] w-auto
            md:w-[500px]
        ">
            {children}
        </div>    
    </div>
  )
}
