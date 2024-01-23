//import './static/about.css'
import { useEffect,useState } from 'react';
import axios from 'axios'

export default function About(){
    const [data, setData] = useState([]);
    // const [q,setq]=useState([])
      
    // useEffect(() => {
    //   axios.get('http://localhost:8000/user?q=haiban') // Replace with your API endpoint
    //       .then(response => setData(response.data))
    //       .catch(error => console.error(error));
    // }, []);

    // const [query, setQuery] = useState('');
    // const [results, setResults] = useState([]);

    // useEffect(() => {
    // if (query.trim() === '') {
    //   setResults([]);
    //   return;
    // }

    // // Make a GET request using Axios
    // axios.get(`http://localhost:8000/user?q=${query}`)
    //   .then((response) => setResults(response.data))
    //   .catch((error) => console.error('Error:', error));
    // }, [query]);

    // async function handlesearch(e) {
    //   e.preventDefault(); // Prevent the default form submission
      
    //   // Make the API request with the current query
    //   if (query.trim() !== '') {
    //     try {
    //       const response = await axios.get(`http://localhost:8000/user?q=${query}`);
    //       console.log('API Response:', response.data);
    //       setResults(response.data);
    //     } catch (error) {
    //       console.error('API Error:', error);
    //     }
    // }
    const [searchName, setSearchName] = useState('');
  const [user, setUser] = useState(null);

  const fetchUser = async (name) => {
    try {
      const response = await axios.get(`http://localhost:8000/user?q=${name}`);
      const userData = response.data.data[0]; // Assuming there's only one user in the response

      setUser(userData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setUser(null);
    }
  };


    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      address: '',
      password: '',
      class: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Send the form data to the backend
      axios.post('http://localhost:8000/user', formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error sending data:', error);
        });
    };


      
  return(
  <>
    <h1>abouttt</h1>
    <p>{data.message}</p>
    <div>
        {data.data ? (
          data.data.map((item) => (
            <div key={item.idusr}>
              <p>Name: {item.nm}</p>
              <p>Phone: {item.phn}</p>
              <p>Address: {item.adrss}</p>
              <p>Password: {item.pw}</p>
              <p>Class: {item.clss}</p>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    <div>
      <h1>Submit Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Class:</label>
          <input
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>
    <div className="App">
      <h1>Fetch User by Name</h1>
      <div>
        <label htmlFor="searchName">Enter User Name: </label>
        <input
          type="text"
          id="searchName"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button onClick={() => fetchUser(searchName)}>Search</button>
      </div>
      {user ? (
        <div>
          <h2>User Details</h2>
          <p>Name: {user.nm}</p>
          <p>Phone: {user.phn}</p>
          <p>Address: {user.adrss}</p>
          <p>Class: {user.clss}</p>
        </div>
      ) : null}
    </div>
  </>
)
}