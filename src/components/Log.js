import React from "react";
import fire from "../config/fire";
import * as firebase from "firebase";
import {Table } from "react-bootstrap";

function Log(){
    const[tasks,setTasks]=React.useState([]);
    const [newTask, setnewTask]=React.useState('');
    const [updateTask,setupdateTask] =React.useState('');

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

    const onUpdate=(id)=>{
        const db=firebase.firestore()
        const docRef = this.db.collection('users').doc(id);
        
        docRef
        .update({firstname:setupdateTask})
        .update({lastname:setupdateTask})
        .update({email:setupdateTask})
        .update({isactive:setupdateTask})
        .update({password:setupdateTask})
        .update({mobile:setupdateTask})
       

 .then(() => {
            console.log("document updated sucessfully");
          })
          .catch((error) => {
            console.log(error);
          });
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
        style={{backgroundColor:"transparent",border:2}} type="text" placeholder={spell.firstname} onChange={e => setupdateTask(e.target.value)}placeholder={spell.firstname}/></td>
      <td><input style={{backgroundColor:"transparent",border:0}} type="text" placeholder={spell.lastname} onChange={e => setupdateTask(e.target.value)}placeholder={spell.lastname}/></td>
      <td><input style={{backgroundColor:"transparent",border:0}} type="text" placeholder={spell.email} onChange={e => setupdateTask(e.target.value)}placeholder={spell.email}/></td>
<td><input style={{backgroundColor:"transparent",border:0}} type="text" placeholder={spell.password} onChange={e => setupdateTask(e.target.value)}placeholder={spell.password}/></td>
<td><input style={{backgroundColor:"transparent",border:0}} type="text" placeholder={spell.mobile} onChange={e => setupdateTask(e.target.value)}placeholder={spell.mobile}/></td>
<td><input style={{backgroundColor:"transparent",border:0}} type="text" placeholder={spell.isactive} onChange={e => setupdateTask(e.target.value)}placeholder={spell.isactive}/></td>
<td><img src="https://www.flaticon.com/svg/static/icons/svg/3277/3277457.svg" style={{height:35,width:35,margin:44}} onClick={()=>onUpdate(spell.id)}/></td>
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