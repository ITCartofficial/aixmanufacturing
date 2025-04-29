import React from 'react'
import { Route, Routes, } from 'react-router'
import Dashboard from '../pages/dashboard/Dashboard'
import Plants from '../pages/plants/Plants'
import Machines from '../pages/machines/Machines'
import Sub_Plants from '../pages/plants/subpage/Sub_Plants'
import MachineDetails from '../pages/machines/subpage/MachineDetails'
import Labor from '../pages/labor/labor'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/labor" element={<Labor />} />
        <Route path="plants/:plantId/:slug" element={<Sub_Plants />} />
        <Route path="machines/:machineId/:slug" element={<MachineDetails />} />
      </Routes>
  )
}

export default Router