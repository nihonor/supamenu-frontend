

interface Props{
    image: string
    step:string
    desc:string
}

const Div = ({image,step,desc}:Props) => {
  return (
    <div className='flex justify-center'>
      <div className='h-44 w-44 bg-white rounded-lg border-gray-200 border-2 pt-5'>
        <div className='flex justify-center text-bgButton text-5xl'>
       {image}
        </div>
        <h1 className="flex justify-center font-bold text-2xl">{step}</h1>
        <p className="text-xs flex justify-center  text-gray-600 text-x">{desc}</p>
        
      </div>
    </div>
  )
}

export default Div
