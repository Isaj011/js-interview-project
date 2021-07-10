import React from 'react'
import './pagination.css'

export const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers =[];

    for(let i =1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);

    }
    
    return (
        <nav className="pagination">
            {pageNumbers.map(number=>(
                <a className="pagination__item pagination__item--is-active" href='#!' onClick={()=> paginate(number)}>
                    {number}
                </a>
            ))}

        </nav>
    )
}
