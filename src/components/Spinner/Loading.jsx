import React from 'react'
import { Spinner } from "flowbite-react";
const Loading = ({ isLoading }) => {
    return (
    <>
        {isLoading && (<div className='spinner-container'>
            <Spinner color="info" size="5xl" className="h-12 w-12" />
        </div>)}
    </>
  )
}

export default Loading