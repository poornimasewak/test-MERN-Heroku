import React from 'react';
import topics from './topics.json';
import './topics.css';

const Topics = () => {
    
    return (
        <div>
           {topics.map(topic => (
              <div className="orange"> <a href="/newstudentform">{topic.topics}</a> </div>
               
           ))}
        </div>
    )
}

export default Topics;