import ProfileCard from './ProfileCard.jsx'

const ListOfProfile = ({ data }) => {
  
  return (<div>
    {data.map((card)=>{
      return <ProfileCard key ={card.id} name={card.name} relationship={card.relationship}/>
    })}
  </div>)
}


export default ListOfProfile
