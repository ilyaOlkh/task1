'use client'

import { Pagination } from "@mui/material"
import { useRouter } from "next/router"
import { ChangeEvent } from "react"

interface Props {
    page: number
    numOfPages: number
}

const Pag = ({ page, numOfPages }: Props) => {

    const handleChange = (event: ChangeEvent<unknown>, page: number) => {
        window.history.pushState({}, '', `/?page=${page}`)
        window.location.reload()
    }

    return (
        <div className="p-5 flex justify-center">
            <Pagination defaultPage={+page} hidePrevButton hideNextButton count={+numOfPages} onChange={handleChange} />
        </div>

    )
}

export default Pag