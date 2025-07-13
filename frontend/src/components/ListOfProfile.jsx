import ProfileCard from './ProfileCard.jsx'
import hard_code_data from '../networkings.js'

const ListOfProfile = () => {
  const data = hard_code_data;
  const express = "import espress object here :>";
  const port = 3000;
  const app = {
    appname: "express",
    get: function(url, callback){
    }
  }
  app.get("/", (req, res) => {
  })
  return (<div>
    {data.map((card)=>{
      return <ProfileCard key ={card.id} name={card.name} relationship={card.relationship}/>
    })}
  </div>)
}


export default ListOfProfile
