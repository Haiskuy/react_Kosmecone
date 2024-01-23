import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Navbar1 from "../components/navbar1";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Authdata } from "../components/authwrapper";

export default function Profile(){
  const {logout}=Authdata( )
  const [isHovered, setHovered] = useState(false);
  const [formData, setFormData] = useState({
    user_name: 'John Doe',
    user_class: 'Class A',
    user_address: '123 Main St, City',
    password: '',
  });

  const handleHover = () => {
    setHovered(true);
  }

  const handleLeave = () => {
    setHovered(false);
  }

  const overlayStyle = {
    borderRadius:'full',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: isHovered ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const labelStyle = {
    cursor: 'pointer',
    color: 'white',
    background: '#3498db',
    padding: '8px 16px',
    borderRadius: '4px',
  };

  const inputStyle = 'w-full border rounded-md p-2';
  const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
     
    e.preventDefault();
    // Handle form submission
    axios.patch('http://localhost:8000/user/', formData)
      .then(response => {
        console.log(response.data);
        // Handle response data
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors
      });
  };


  const handleLogout = () => {
  
    logout()
    navigate('/')
  };


  const handleproduct=()=>{
     

  }



  const [userTheme, setUserTheme] = useState(localStorage.getItem('Theme'));
    const [systemTheme, setSystemTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [isDarkTheme, setIsDarkTheme] = useState(userTheme === 'dark' || (!userTheme && systemTheme));

    
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkTheme);
    }, [isDarkTheme]);
  return (
    <>
    <div className="dark:text-zinc-50 dark:bg-zinc-800">
   <Navbar1/>

    <div className="container mx-auto pt-18  dark:text-zinc-50 dark:bg-zinc-800">
    
      <div className="bg-white rounded-lg shadow-lg pt-50 md:p-8 dark:text-zinc-50 dark:bg-zinc-800" >
        <h1 className="text-2xl font-semibold">My Profile</h1>

        <form id="profileForm" encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="flex flex-wrap">
            <div className="w-3/5 md:w-1/2 relative">
              <div
                className="profile-image-container mt-4"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <img
                  src="profile.jpg"
                  alt="Profile Image"
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto md:mx-0"
                />
                <div style={overlayStyle}>
                  <label htmlFor="profileImageUpload" style={labelStyle}>
                    Change Image
                  </label>
                  <input type="file" id="profileImageUpload" accept="image/*" style={{ display: 'none' }} />
                </div>
                
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="mt-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-zinc-50 dark:bg-zinc-800">Username</label>
                <input type="text" id="username" name="user_name" className={inputStyle} value={formData.user_name} onChange={handleChange} />
              </div>
              <div className="mt-4">
                <label htmlFor="userClass" className="block text-sm font-medium text-gray-700 dark:text-zinc-50 dark:bg-zinc-800">Class</label>
                <input type="text" id="userClass" name="user_class" className={inputStyle} value={formData.user_class} onChange={handleChange} />
              </div>
              <div className="mt-4">
                <label htmlFor="userAddress" className="block text-sm font-medium text-gray-700 dark:text-zinc-50 dark:bg-zinc-800">Address</label>
                <input type="text" id="userAddress" name="user_address" className={inputStyle} value={formData.user_address} onChange={handleChange} />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-zinc-50 dark:bg-zinc-800">Password</label>
                <input type="password" id="password" name="password" className={inputStyle} value={formData.password} onChange={handleChange} />
              </div>
              <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2">Save Profile</button>
            </div>
          </div>
        </form>
              <button onClick={handleLogout} className="mt-4 ml-6 bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2">Logout</button>

        <h2 className="mt-8 text-xl md:text-2xl font-semibold dark:text-zinc-50 dark:bg-zinc-800">Add Product</h2>
        <form className="mt-4" action="submit_product.php" method="post" encType="multipart/form-data">
          <div className="mb-4">
            <label htmlFor="product_name" className="block text-sm font-medium text-gray-700 dark:text-zinc-50 dark:bg-zinc-800">Product Name</label>
            <input type="text" id="product_name" name="product_name" className={inputStyle} required />
          </div>
          <div className="mb-4">
            <label htmlFor="product_description" className="block text-sm font-medium text-gray-700 dark:text-zinc-50 dark:bg-zinc-800">Description</label>
            <textarea id="product_description" name="product_description" className={inputStyle} required />
          </div>
          <div className="mb-4">
            <label htmlFor="product_price" className="block text-sm font-medium text-gray-700 dark:text-zinc-50 dark:bg-zinc-800">Price</label>
            <input type="number" id="product_price" name="product_price" className={inputStyle} required />
          </div>
          <div className="mb-4">
            <label htmlFor="product_picture" className="block text-sm font-medium text-gray-700 dark:text-zinc-50 dark:bg-zinc-800">Product Picture</label>
            <input type="file" id="product_picture" name="product_picture" className="w-full p-2" accept="image/*" required />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2">Add Product</button>
        </form>
      </div>
    </div>
    </div>
        
        </>

    )
}