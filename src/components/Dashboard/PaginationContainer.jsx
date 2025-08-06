import { ChevronLeft, ChevronRight } from "lucide-react"

const PaginationContainer = ({ currentPage, totalPages, onPageChange }) => {
  const addPageButton = ({ pageNumber, isActive }) => (
    <button
      key={pageNumber}
      onClick={() => onPageChange(pageNumber)}
      className={`px-2 py-1 mx-1 text-sm rounded ${
        isActive
          ? "bg-custom-blue-100 text-white"
          : "bg-[#ECF1F6] text-gray-700"
      }`}
    >
      {pageNumber}
    </button>
  )

  const renderPageButtons = () => {
    const pageButtons = []
    const siblingCount = 1

    let startPage = Math.max(2, currentPage - siblingCount)
    let endPage = Math.min(totalPages - 1, currentPage + siblingCount)

    pageButtons.push(
      addPageButton({ pageNumber: 1, isActive: currentPage === 1 })
    )

    if (startPage > 2) {
      pageButtons.push(
        <span key='start-ellipsis' className='px-1'>
          ...
        </span>
      )
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        addPageButton({ pageNumber: i, isActive: currentPage === i })
      )
    }

    if (endPage < totalPages - 1) {
      pageButtons.push(
        <span key='end-ellipsis' className='px-1'>
          ...
        </span>
      )
    }

    if (totalPages > 1) {
      pageButtons.push(
        addPageButton({
          pageNumber: totalPages,
          isActive: currentPage === totalPages,
        })
      )
    }

    return pageButtons
  }

  if (totalPages < 2) return null

  return (
    <div className='flex items-center justify-end md:justify-between mt-4 md:mt-0 flex-wrap gap-4'>
      <div className='flex items-center'>
        <button
          className='bg-[#ECF1F6] p-2 rounded'
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} color='#B5B5C3' />
        </button>
        {renderPageButtons()}
        <button
          className='bg-[#ECF1F6] p-2 rounded mx-2'
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight size={16} color='#B5B5C3' />
        </button>
      </div>
    </div>
  )
}

export default PaginationContainer
