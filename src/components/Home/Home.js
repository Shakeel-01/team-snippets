import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import background from '../../Photo/bg.jpg';

const Home = () => {
    const [teams, setTeams]= useState([])
//    console.log(teams)

   useEffect(()=>{
    fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League
    `)
    .then(res=>res.json())
    .then(data=>setTeams(data.teams))
   },[])
    return (
        <div style={{backgroundColor:'sandybrown'}}>
            <header style={{ backgroundImage: `url(${background})`,width:'100%',height:'300px', backgroundRepeat: "no-repeat",backgroundSize:'cover'}}>
                <h1 style={{color:'navy', paddingTop:'100px'}} className='d-flex align-items-center justify-content-center'>Team Snippets</h1>
            </header>
            {
               teams.map(team=><Team team={team}></Team>)
            }
        </div>
    );
};

export default Home;