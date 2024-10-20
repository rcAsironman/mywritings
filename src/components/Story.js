import React from 'react';
import { stories } from '../stories/storyData';
import StoryComponent from './storyComponent/storyComponent';

function Story() {
    return (
        <div className="col text-center d-flex flex-column align-items-center" style={{ backgroundColor: 'green' }}>
            {
                stories.map((data, index) => (
                    <StoryComponent key={index} story={data} />
                ))
            }
        </div>
    );
}

export default Story;
