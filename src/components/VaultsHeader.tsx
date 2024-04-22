import React from 'react'
const VaultsHeader=props=>{
    return (
        <div className=" flex items-end justify-around" >
            <div className='w-[50%]' >
                <div className='text-white text-5xl font-bold mb-4' >Dynamic Vaults</div>
                <div className='text-white text-xl font-bold mb-4' >
                    Vault assets are automatically rebalanced every minute between top lending protocols for the safest, most optimized yields.
                    </div>
            </div>
            <div className=' mb-5'>
                <div className='flex items-center justify-center' >
                    <div className='rounded-full bg-black bg-opacity-50 p-4 ml-10 mr-2' >
                        <img src="/assets/images/drift.8e5855ff.svg" width={20} />
                    </div>
                    <div className='rounded-full bg-black bg-opacity-50 p-4 mr-2' >
                        <img src="/assets/images/frakt.059e09a0.svg" width={20} />
                    </div>
                    <div className='rounded-full bg-black bg-opacity-50 p-4 mr-2' >
                        <img src="/assets/images/francium.fe538105.svg" width={20} />
                    </div>
                    <div className='rounded-full bg-black bg-opacity-50 p-4 mr-2' >
                        <img src="/assets/images/mango.cc101f67.svg" width={20} />
                    </div>
                    <div className='rounded-full bg-black bg-opacity-50 p-4 mr-2' >
                        <img src="/assets/images/marginfi.db256754.svg" width={20} />
                    </div>
                    <div className='rounded-full bg-black bg-opacity-50 p-4 mr-2' >
                        <img src="/assets/images/port_finance_with_lm.818e343e.svg" width={20} />
                    </div>
                    <div className='rounded-full bg-black bg-opacity-50 p-4 mr-2' >
                        <img src="/assets/images/solend_with_lm.5caf6078.svg" width={20} />
                    </div>
                    <div className='rounded-full bg-black bg-opacity-50 p-2 mr-2' >
                        <img src="/assets/images/tulip.e0d06733.svg" width={20} />
                    </div>
                </div>
                <div className='text-center' >
                    Allocation adjusted every minute between these protocols
                </div>
            </div>
        </div>
    )
}
export default VaultsHeader