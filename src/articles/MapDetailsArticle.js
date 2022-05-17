import React from 'react'
import '../styles/MapDetailsArticle.css';
import ReactAudioPlayer from 'react-audio-player';

function MapDetailsArticle({data}) {
  return (
    <>
<div className="img1">
<img src={data.splash} />
<h1>{data.displayName}</h1>
</div>  
<img className="img2" src={data.displayIcon} />

<h3>Callouts</h3>
<p>{data.callouts[0].regionName}</p>
<p>{data.callouts[1].regionName}</p>
<p>{data.callouts[2].regionName}</p>
<p>{data.callouts[3].regionName}</p>
<p>{data.callouts[4].regionName}</p>
<p>{data.callouts[5].regionName}</p>
<p>{data.callouts[6].regionName}</p>
<p>{data.callouts[7].regionName}</p>
<p>{data.callouts[8].regionName}</p>
<p>{data.callouts[9].regionName}</p>
<p>{data.callouts[10].regionName}</p>
<p>{data.callouts[11].regionName}</p>
<p>{data.callouts[12].regionName}</p>
<p>{data.callouts[13].regionName}</p>
<p>{data.callouts[14].regionName}</p>
<p>{data.callouts[15].regionName}</p>
<p>{data.callouts[16].regionName}</p>
<p>{data.callouts[17].regionName}</p>
<p>{data.callouts[18].regionName}</p>
<p>{data.callouts[19].regionName}</p>
<p>{data.callouts[20].regionName}</p>
<p>{data.callouts[21].regionName}</p>

</>
  )
}

export default MapDetailsArticle
