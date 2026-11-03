import profilePic from './assets/pfp.jpg'

function Card(){
    return(
       <div className="card" >
            <img className='card-img' src={profilePic} alt="profile picture" width="200px"></img>
            <h2>Brian Ngugi</h2>
            <p>I am learning how to code </p>

        </div>
    )
}
  export default Card 

