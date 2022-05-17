import React from 'react'
import '../styles/AgentDetailsArticle.css';
import ReactAudioPlayer from 'react-audio-player';

function AgentsDescArticle({data}) {
  return (
    <>
<div className="box1">
<img src={data.fullPortraitV2} />
<h1>{data.displayName}</h1>
<p>{data.description}</p>
</div>  

<h1>Abilities</h1>

<div className="box2">
<h3>{data.abilities[0].displayName}</h3>
<p>{data.abilities[0].description}</p>
</div>  

<div className="box2">
<h3>{data.abilities[1].displayName}</h3>
<p>{data.abilities[1].description}</p>
</div>  

<div className="box2">
<h3>{data.abilities[2].displayName}</h3>
<p>{data.abilities[2].description}</p>
</div>  

<div className="box2">
<h3>{data.abilities[3].displayName}</h3>
<p>{data.abilities[3].description}</p>
</div>  

<div className="box5">
<ReactAudioPlayer
  className="audioPlayer"
  src={data.voiceLine.mediaList[0].wave}
  autoPlay
  controls
/>
</div>
</>
  )
}

export default AgentsDescArticle
