import React from 'react'
import './posts.css'

export const Post = ({posts, loading}) => {

    if(loading){
        return <h2>loading...</h2>
    }
    return (
        <div className="wrapper">

            {posts.map(post=>(
                <card >
                {/* <h1 key={post.id}>{post.name}</h1>
                <h2 >{post.email} </h2>
                <h3>{post.bio} </h3> */}
                <div class="profile-card js-profile-card">
          <div className="profile-card__img">
            <img src={`https://robohash.org/${post.id}?set=set5&size=180x180`} alt="profile card"></img>
          </div>
      
          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">{post.name} </div>
            <div className="profile-card__txt">{post.bio} </div>
            <div className="profile-card-loc">
              <span className="profile-card-loc__icon">
                {/* <svg className="icon"><use xlink:href="#icon-location"></use></svg> */}
              </span>
      
              <span className="profile-card-loc__txt">
                {post.email}
              </span>
            </div>
      
            <div className="profile-card-inf">
              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">1598</div>
                <div className="profile-card-inf__txt">Followers</div>
              </div>
      
              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">65</div>
                <div className="profile-card-inf__txt">Following</div>
              </div>
      
              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">123</div>
                <div className="profile-card-inf__txt">Articles</div>
              </div>
      
              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">85</div>
                <div className="profile-card-inf__txt">Works</div>
              </div>
            </div>
    
      
            <div className="profile-card-ctr">
              <button className="profile-card__button button--blue js-message-btn">Message</button>
              
            </div>
          </div>

      
        </div>

                </card>
                
            ))}
            
            
        </div>
    )
}
