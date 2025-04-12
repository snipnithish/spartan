import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const ProfileCard=({profile})=>{
    return(
        <div>
    <div 
    style={{
        border:"2px solid black",
        margin:"300px auto",
        justifyConten:"center",
        alignItems:"center",
        textAlign:"center",
        border:"2px solid blue",
        borderRadius:"10px",
        width:"400px",
        height:"500px",
        maxHeight:"300px",
        backgroundColor:"white",
    
    }}
    >
        <div>
         <img
            style={{
                width:"30%",
                justifyContent:"center",
                alignItems:"center",
                border:"2px solid black",
                borderRadius:"50%"

                
            }}
        
        
            
            src={viteLogo}
            
            />
            </div>
            
            <div 
            style={{
                fontSize:"large",
                fontFamily:"cursive",
                textAlign:"center",
            
                flexDirection:"column",
                alignItems:"center",
            
                justifyContent:"center"
            }}>
                    <span>Name :</span>
                    <span>{profile.name}</span>
                    <br/>
                    <span>Department:</span>
                    <span>{profile.Department}</span>
                    <br/>
                    <span>year :</span>
                    <span>{profile.Year}</span>
                    <br/>
                    <span>Mobile :</span>
                    <span>{profile.mobile}</span>
                    <br/>
                    <span>address :</span>
                    <span>{profile.adress}</span>
                    </div>
                    

            <a href="https://in.linkedin.com/" target="_blank">
                <i>linkedln profile</i>
            </a>
            </div>
        </div>
    
        


)    
}
export default ProfileCard;