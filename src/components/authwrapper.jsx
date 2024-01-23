import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { RenderRoutes } from "./renderroutes";



const authcontex=createContext()
export const Authdata= ()=> useContext(authcontex)

export const Authwrapper= ()=>{
    const [loggedIn, setLoggedIn] = useState( false);
    useEffect(() => {
           // Initial check for authentication status
         const checkAuthentication = async () => {
             try {
               const response = await axios.get('http://localhost:8000/user/authenticate', { withCredentials: true });
               console.log(response);
               setLoggedIn(true)
             } catch (error) {
               console.log('Error fetching data', error);
               setLoggedIn(false)
      
             }
           };
      
           checkAuthentication()}, [ ]);
      

    const login=(formData)=>{
         
        // Send the form data to the backend
        axios.post('http://localhost:8000/user/login', formData,{ withCredentials: true })
          .then((response) => {
              console.log(response.data);
              if (response.data.message!=='no data avalible'
              ) {
                  // Redirect to the profile page
                  setLoggedIn(true)

                  console.log("login success",loggedIn)
                  
              }
            })
          .catch((error) => {
            setLoggedIn(false)
            console.error('Error sending data:', error);
          });
    }

    const logout=()=>{
      axios.post('http://localhost:8000/user/logout', {}, { withCredentials: true })
      .then(response => {
        console.log(response.data);
        setLoggedIn(false)
        // Handle response data
        // Typically, you would clear any user-specific data from your application here
        // For example, you might clear the user's session, or reset any user-specific state variables
        
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors
      });
    }
    return(
      <authcontex.Provider value={{loggedIn,login,logout}}>
        <RenderRoutes/>
      </authcontex.Provider>
    )
}
