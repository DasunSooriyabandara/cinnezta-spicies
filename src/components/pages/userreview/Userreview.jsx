import React, {  useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, query, where,setDoc,updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

import './userreview.css';
import { FaStar } from "react-icons/fa";
import { addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"};



function Userreview(){
    const auth = getAuth();
    const [user, setUser] = useState(null);
    const [comment, setComment] = useState("");
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [review, setReview] = useState([]);
    const [overallRate, setOvrallRate] = useState(0);

    useEffect(()=>{
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docSnap = await getDocs(query(collection(db, "user"), where("email", "==", user.email)));

          docSnap.forEach(async (doc) => {
            const data = await doc.data();
            if(data !== undefined && data !== null) {
              setUser({email:user.email, displayName:data.displayName});
            }
          })
          
        }
      })
  },[auth])

  useEffect(() => {

    async function fetchData(){
      let overall = 0;
      const docSnap = await getDocs(collection(db, "reviews"));
      docSnap.forEach(async (doc) => {
        let responseArray = review;

        let data = doc.data();
        let result = {
          email: data.userEmail,
          //displayName: user.displayName,
          rate: data.rate,
          comment: data.comment
        }
        responseArray.push(result);

        overall = overall + data.rate;

        setReview([...responseArray]);
      });

      setOvrallRate(overall/5);

    }

    if(!loaded){
      fetchData().then(()=>{
        setLoaded(true);
        setLoading(false);
      });
    }
  },[])
  
    const handleClick = value => {
      setCurrentValue(value)
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        let dataAdded = await addDoc(collection(db, "reviews"), {
          userEmail: user.email,
          rate: currentValue,
          comment: comment
        });
  
        if(dataAdded){
          setLoading(false);
          alert("Successfully rated.");
          window.location.reload();
        }
  
      } catch (error) {
        console.log(error);
      }
    }

    function TableRow(props){

  
      return (
        <tr >
          {/* <th scope="row">{props.index + 1}</th> */}
          <td style={{"margin-right":"20px",}}>{props.email}</td>
          <td>{props.comment}</td>
          {/* <td>{props.phone}</td> */}
          {/* <td><i className="fa fa-plus" aria-hidden="true"></i></td>
          <td><i className='bx bx-grid-alt' ></i></td> */}
          {/* <td>
            <i style={{cursor: 'pointer'}} onClick={handleDeleteUser} className='fa fa-trash' />
          </td> */}
        </tr>
      )
    }

    
        return (
            
            // <div class="w-100 p-3" style="background-color: #eee;" >
            //         <h2>User Reviews </h2>

            //     {/* <p>Add your reviews</p> */}
            //    <form>
            //     <div class="form-group">
            //         <label for="exampleFormControlTextarea1">Add your review</label>
            //         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            //     </div>
            //     </form>
            //     <br/>
            //     <div class="w-25 p-3"><button type="button" class="btn btn-outline-secondary">Submit</button></div>
            // </div>
// ..............................starreview.........................................
                <div class="p-3 mb-2 bg-light text-dark" style={styles.container} >
                <h2>Rate This Item </h2>
                <div style={styles.stars}>
                {stars.map((_, index) => {
                    return (
                    <FaStar
                        key={index}
                        size={24}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                        style={{
                        marginRight: 10,
                        cursor: "pointer"
                        }}
                    />
                    )
                })}
                </div>
                <form onSubmit={handleSubmit} method="post">
                <textarea onChange={(e)=>{setComment(e.target.value)}}
                placeholder="What's your experience?"
                style={styles.textarea}
                />

                <button type="submit"
                style={styles.button}
                >
                Submit
                </button>
                </form>
                <br/>
                <br/>

                <div >
                      <h2>Overall Rate: {overallRate}/5</h2>
                      <br/>

                      <table>
                        <tr>
                        <th style={{"margin-right":"5px"}}>Email</th>
                        <th>Comment</th>
                        </tr>
                        
                        {review.map((item, index) => {
                        return (
                          <TableRow
                            key={index}
                            index={index}
                            // id={item.id}
                            email={item.email}
                            comment={item.comment}
                            //email={item.email}
                          />
                        )
                      })}

                        </table>
                </div>

                </div>
                  
                

              );

            };

            const styles = {
                container: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                 
                  
                },
                stars: {
                  display: "flex",
                  flexDirection: "row",
                },
                textarea: {
                  border: "1px solid #a9a9a9",
                  borderRadius: 5,
                  padding: 10,
                  margin: "20px 0",
                  minHeight: 100,
                  width: 600
                },
                button: {
                  border: "1px solid #a9a9a9",
                  borderRadius: 5,
                  width: 150,
                  padding: 7,
                  color:"black",
                  background:"#0000",
                  margin:"1px"
                  
                }
              
              };
       
    
    

export default Userreview;