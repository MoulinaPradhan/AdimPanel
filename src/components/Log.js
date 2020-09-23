import React from "react";
import fire from "../config/fire";
import * as firebase from "firebase";
import {Table } from "react-bootstrap";

function Log(){
    const[tasks,setTasks]=React.useState([]);
    const [newTask, setnewTask]=React.useState('');
    const [updateFirstName,setupdateFirstName] =React.useState('');
    const [updateLastName,setupdateLastName] =React.useState('');
    const [updateMobile,setupdateMobile] =React.useState('');
    const [updateEmail,setupdateEmail]=React.useState('');
    const [updatePassword,setupdatePassword]=React.useState('');
    React.useEffect(()=>{
        const fetchData=async ()=>{
            const db=firebase.firestore();
            db.collection("users")
            .onSnapshot(function(data){
                console.log(data)
                setTasks(data.docs.map(doc=>({...doc.data(),id:doc.id})))
            });

        };
        fetchData();
    },[]);

  
    function onDelete(id){
        const db=firebase.firestore()
        db.collection('users').doc(id).delete()
    }

    const onFisrtNameUpdate=(id)=>{
        const db=firebase.firestore()
        const docRef = db.collection('users').doc(id);
       docRef
        .update({firstname:updateFirstName})
        // .update({lastname:updateTask})
        // .update({email:updateTask})
        // .update({isactive:updateTask})
        // .update({password:updateTask})
        // .update({mobile:updateTask})
       

 .then(() => {
            console.log("document updated sucessfully");
          })
          .catch((error) => {
            console.log(error);
          });
    }
    const onLastNameUpdate=(id)=>{
      const db=firebase.firestore()
      const docRef = db.collection('users').doc(id);
     docRef
      .update({lastname:updateLastName})
    }

    const onupdateMobile=(id)=>{
      const db=firebase.firestore()
      const docRef = db.collection('users').doc(id);
     docRef
      .update({mobile:updateMobile})
    }
    const onupdateEmail=(id)=>{
      const db=firebase.firestore()
      const docRef = db.collection('users').doc(id);
     docRef
      .update({mobile:updateEmail})
    }
    const onupdatePassword=(id)=>{
      const db=firebase.firestore()
      const docRef = db.collection('users').doc(id);
     docRef
      .update({password:updatePassword})
    }
    
    return(
        <div><h2>Data</h2>
        <div className="data-table">
        <Table striped bordered hover><thead>
    <tr>
      
      <th>First Name</th>
      <th>Last Name</th>
     <th>Email</th>
     <th>Password</th>
     <th>Mobile</th>
     <th>Is Active</th>
     <th>Update</th>
     <th>Delete</th>
     
    </tr>
  </thead></Table>
        {tasks.map(spell=>(
              <Table striped bordered hover><thead></thead>
          
  <tbody style={{height:1}}>
    <tr>
       <td ><input 
        style={{backgroundColor:"transparent",border:2}} type="text" placeholder={spell.firstname} onChange={e => setupdateFirstName(e.target.value)}placeholder={spell.firstname}/><img src="https://www.flaticon.com/svg/static/icons/svg/3277/3277457.svg" style={{height:15,width:15,margin:44}} onClick={()=>onFisrtNameUpdate(spell.id)}/></td>
      <td><input style={{backgroundColor:"transparent",border:0}} type="text" placeholder={spell.lastname} onChange={e => setupdateLastName(e.target.value)}placeholder={spell.lastname}/><img src="https://www.flaticon.com/svg/static/icons/svg/3277/3277457.svg" style={{height:15,width:15,margin:44}}onClick={()=>onLastNameUpdate(spell.id)}/></td>
      <td><input style={{backgroundColor:"transparent",border:0}} type="text" placeholder={spell.email} onChange={e => setupdateEmail(e.target.value)}placeholder={spell.email}/><img src="https://www.flaticon.com/svg/static/icons/svg/3277/3277457.svg" style={{height:15,width:15,margin:44}}onClick={()=>onupdateEmail(spell.id)}/></td>
<td><input style={{backgroundColor:"transparent",border:0}} type="text" placeholder={spell.password} onChange={e => setupdatePassword(e.target.value)}placeholder={spell.password}/><img src="https://www.flaticon.com/svg/static/icons/svg/3277/3277457.svg" style={{height:15,width:15,margin:44}}onClick={()=>onupdatePassword(spell.id)}/></td>
<td><input style={{backgroundColor:"transparent",border:0}} type="text" placeholder={spell.mobile} onChange={e => setupdateMobile(e.target.value)}placeholder={spell.mobile}/><img src="https://www.flaticon.com/svg/static/icons/svg/3277/3277457.svg" style={{height:15,width:15,margin:44}}onClick={()=>onupdateMobile(spell.id)}/></td>
<td><input style={{backgroundColor:"transparent",border:0}} type="text" placeholder={spell.isactive} placeholder={spell.isactive}/></td>
{/* <td><img src="https://www.flaticon.com/svg/static/icons/svg/3277/3277457.svg" style={{height:35,width:35,margin:44}} onClick={()=>onUpdate(spell.id)}/></td> */}
<td><img src="https://www.flaticon.com/svg/static/icons/svg/3413/3413245.svg" style={{height:35,width:35,margin:44}}onClick={()=>onDelete(spell.id)}/></td>
    </tr>
    
  </tbody>
</Table>
        ))}
        </div>
        </div>
    )

}

export default Log;