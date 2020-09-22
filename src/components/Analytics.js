import React from 'react';
import {Pie} from 'react-chartjs-2';

const state = {
  // labels: ['January', 'February', 'March',
  //          'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#1971de',
        '#ffc107',
        '#30ab4c'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [28,32,45]
    }
  ]
}

export default class Analytics extends React.Component {
  render() {
    return (
      <div>
        <div id="analysis-container">
          <h6 style={{backgroundColor:"lightgray",padding:"10px"}}>Analytic Audience Mattric<img src="https://www.flaticon.com/svg/static/icons/svg/860/860760.svg" style={{height:20,width:20,marginLeft:"30%",opacity:0.3}}/></h6>
         <div id="labels">
           <div><div style={{height:10,width:10,backgroundColor:"#30ab4c",borderRadius:"50%"}}></div><span>Active</span></div>
           <div><div style={{height:10,width:10,backgroundColor:"#1971de",borderRadius:"50%"}}></div><span>Hold</span></div>
           <div><div style={{height:10,width:10,backgroundColor:"#ffc107",borderRadius:"50%"}}></div><span>Closed</span></div>
           </div> 
        <Pie
          data={state}
          options={{
            title:{
              // display:true,
              // text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />

      
      </div>
      </div>
    );
  }
}