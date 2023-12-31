import React, { useState } from 'react';

export const usePagination = (perPageRecord, totalPageRecords) => {

    const totalPages = Math.ceil(totalPageRecords / perPageRecord)

    const [startPageindex, setStartPageIndex] = useState(0)

    const [endPageIndex, setEndPageIndex] = useState(perPageRecord - 1)

    const [currentPageIndex, setCurrentPageIndex] = useState(1)

    //function

    const displayPage = (pageNo) => {
        setCurrentPageIndex(pageNo)
        let end_page_index = (perPageRecord * pageNo) - 1
        let start_page_index = (perPageRecord * pageNo) - perPageRecord

        setStartPageIndex(start_page_index)

        if (end_page_index > totalPageRecords) {
            setEndPageIndex(totalPageRecords - 1)
        } else {
            setEndPageIndex(end_page_index)
        }
    }
    return [
        totalPages, startPageindex, endPageIndex, currentPageIndex, displayPage
    ]

}

