import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import './profile.css'

const Profile = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [trackNo, set_trackNo] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docSnap = await getDocs(query(collection(db, "user"), where("email", "==", user.email)));

          docSnap.forEach(async (doc) => {
            const data = await doc.data();
            if(data !== undefined && data !== null) {
              setUser({email:user.email, phoneNumber:data.phoneNumber});
            }
          })
          
        }
      })
  },[auth])

  useEffect(() => {

    async function fetchData(){
      const docSnap = await getDocs(query(collection(db, "orders"), orderBy('timestamp')));

      docSnap.forEach(async (doc) => {
        const data = await doc.data();
        if(data !== undefined && data !== null && data.email == auth.currentUser.email) {
          set_trackNo(doc.id);
        }
      })
    }
    fetchData().then(()=>{
      setLoaded(true);
    });

  },[])

  return (
    <React.Fragment>
      {user ? (
        <div class="wrapper">
          <div class="left">
            <div class="info">
              <img src="https://cdn-icons-png.flaticon.com/512/1144/1144709.png" 
          alt="user" width="100"/> 
          {/* https://randomuser.me/api/portraits/men/43.jpg */}
              <h4>{auth.currentUser.displayName}</h4><br />

              <h3>Buy Your items with Us!<br/>Freshness Of Ceylon Spices</h3>
              
              <div class="info_data">

                {/* <div class="data">
                  <button class="btn"><a href="user-add-product"> Add Your Items</a></button>

                </div> */}
              </div>
            </div>


          </div>
          <div class="right">
            <div class="info">
              <h3>Information</h3>
              <div class="info_data">
                <div class="data">
                  <h4>Email</h4>
                  <p>{user.email}</p>
                </div>
                <div class="data">
                  <h4>Phone</h4>
                  <p>{user.phoneNumber}</p>
                </div>
              </div>
            </div>

            <div class="projects">
              <h3>Shipping Details</h3>
              <div class="projects_data">
                <div class="data">
                  {/* <h4>Tracking ID</h4> */}
                  <p>{trackNo}</p>
                </div>

              </div>
            </div>


          </div>
        </div>
      ):(
        <h1>403</h1>
      )}
    </React.Fragment>
  )
}

export default Profile