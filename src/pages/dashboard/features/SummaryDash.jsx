import React from 'react'
import { MdChevronRight } from 'react-icons/md'
import Container from '../../../components/common/Container'
import SemiDonut from '../../../components/charts/SemiDonut'
import { Link } from 'react-router'

const SummaryDash = () => {
  return (
    <Container
          className="col-span-3"
          label="Machine Summary"
          dropDown={true}
        >
          <div className="flex flex-col items-center justify-between w-[100%] h-[260px] mt-4 relative">
            <SemiDonut />
            <Link
              to="#"
              className="p-0 h-auto flex items-center hover:gap-2 cursor-pointer"
            >
              <span className="text-blue-500 hover:text-blue-700 text-[16px]">
                View All Activity
              </span>
              <MdChevronRight className="text-blue-500 hover:text-blue-700 text-[16px]" />
            </Link>
          </div>
        </Container>
  )
}

export default SummaryDash