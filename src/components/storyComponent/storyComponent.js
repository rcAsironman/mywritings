import React from 'react'
import "../storyComponent/storyComponent.css"

function storyComponent({story}) {
  return (
    <div className='storyContainer text-start'>
          <div>
           <h3 className='text-start'> {story.title}</h3>
           <p className='text-start description'>{story.description}</p>
          </div>

          <p>
            {story.mainContent}
          </p>

          <div>
              <span><b>{story.author}</b></span>
              <p>{"published "+ story.publishedDate}</p>
          </div>
    </div>
  )
}

export default storyComponent