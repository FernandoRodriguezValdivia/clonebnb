import Providers from "../providers/Providers"

const Baselayout = ({children}) => {
  return (
    <>

<Providers>

<div className="flex justify-center h-screen  content-center pt-10">
<main className=" flex flex-col w-full max-w-lg gap-4">
    {children}
</main>
</div>

</Providers>



 



   
    </>
  )
}

export default Baselayout