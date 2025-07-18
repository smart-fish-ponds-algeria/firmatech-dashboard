import PondOverview from '@/components/dashboard/PondOverview'
import RecentAlerts from '@/components/dashboard/RecentAlerts'
import SummaryCards from '@/components/dashboard/SummaryCards'
import { Dot, LayoutDashboard } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <main className='p-6 '>
        <div className='pb-4 flex justify-between '>
            <div> 
            <div className='text-4xl flex items-center space-x-1 font-bold'><LayoutDashboard className='text-2xl text-blue-600' /> <span>Dashbaord</span></div>
<p>Monitor your aquaculture operations</p>
</div>
<div className=' flex space-x-2'>
<h1>Last updated: 18/07/2025 03:08:11</h1>
<h1 className='text-green-500 flex '> <span>Live</span><Dot className='text-3xl' /></h1>
</div>
</div>
<SummaryCards healthy="27°C" total="7.4" critical="6.8mg/L" warning="15kg" />
<div className='flex flex-row-reverse'>
<RecentAlerts/>
<PondOverview/>
</div>

    </main>
    
  )
}

export default page