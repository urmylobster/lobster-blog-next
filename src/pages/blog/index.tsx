import React from 'react'
import { useEffect, useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { getPostsList } from '@/services/post'



function index() {

  const [postData, setPostData] = useState([])

  useEffect(() => {
    async function getCurrentPostList() {
      const res = await getPostsList()
      setPostData(res)
    }
  }, [])

  const addPost = () => {

  }

  const toDetail = () => {

  }

  return (
    <div className="wd-100">
      <div>
        <h2 className="text-sm text-orange-600 font-bold mb-2">小龙虾🦞的博客</h2>
        <h6 className="text-tiny font-mono">You are my lobster</h6>
        <div className="flex justify-center my-2">
          <div className="text-center flex items-center text-tiny  bg-orange-300
          text-orange-600 w-14 h-2 p-2 rounded"
            onClick={() => addPost()}>添加文章
            <PlusCircleIcon className="w-2 h-2" />
          </div>
        </div>
      </div>
      <div>
      { postData.map(item => {
          return (<h3 className="text-tiny py-1 text-orange-600 flex font-bold">
          <span className="w-10/12 inline-block mr-0.5 font-semibold overflow-hidden
            whitespace-nowrap text-ellipsis text-left"
            onClick={() => toDetail()}>{item.postTitle}</span>
        </h3>)
        })
      }
      </div>
    </div>
  )
}

export default index