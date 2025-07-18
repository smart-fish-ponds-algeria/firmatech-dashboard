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
            <div className='text-4xl flex items-center space-x-1 font-bold'><span>Dashbaord</span></div>
<p>Monitor your aquaculture operations</p>
</div>
<div className=' flex space-x-2'>
<h1>Last updated: 18/07/2025 03:08:11</h1>
<h1 className='text-green-500 flex '> <span>Live</span><Dot className='text-3xl' /></h1>
</div>
</div>
<SummaryCards healthy="203" total="255" critical="5" warning="32" />
<div className='flex justify-between w-full flex-row-reverse'>
<RecentAlerts/>
<PondOverview/>
</div>

    </main>
    
  )
}

export default page