import React from 'react'


function Slides(props){
    return(
        <div className='Slides'>
          
            <div className="pageOf">
              <h3>1/25</h3> 
            </div>

         <h1>{props.people.name.first} {props.people.name.last}</h1>
         <h2>From: {props.people.city}, {props.people.country}</h2>
         <h2>Job Title: {props.people.title}</h2>
         <h2>Employer: {props.people.employer}</h2>
        <div className="movies">
         <h2>Favorite Movies: 
             <ol> 
                 <li>
             {props.people.favoriteMovies[0]}
                </li>
                 <li>
             {props.people.favoriteMovies[1]}
                </li>
                 <li>
             {props.people.favoriteMovies[2]}
                </li>
             </ol>
             </h2>
           
             </div>

             {/* { <button onClick={()=> props.changeDisplayIndex(props.index)}>Next</button> } */}
            
        </div>
    )
   
}

export default Slides