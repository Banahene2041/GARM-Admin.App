import { ChevronRight } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"

const PageTitle = ({ title, subTitleLinks = [], subTitle }) => {
  return (
    <article className='px-4'>
      <h1 className='text-xl font-semibold text-[#060606] leading-tight'>
        {title}
      </h1>

      <div className='flex items-center flex-wrap gap-1 font-medium text-[11px] md:text-[13px] text-gray-500'>
        {subTitleLinks.length > 0 && (
          <ul className='flex items-center gap-2'>
            {subTitleLinks.map((link, index) => (
              <li key={index} className='flex items-center gap-1'>
                <Link
                  to={link.url}
                  className='text-custom-blue-100 hover:underline'
                >
                  {link.label}
                </Link>
                {index !== subTitleLinks.length - 1 && (
                  <span className='text-gray-400'>
                    <ChevronRight size={14} />
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}

        {subTitle && (
          <div className='ml-2 text-gray-500 flex items-center'>
            <ChevronRight size={14} />
            <p>{subTitle}</p>
          </div>
        )}
      </div>
    </article>
  )
}

export default PageTitle
