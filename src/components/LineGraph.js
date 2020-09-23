import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: [1,2,3,4,5,6,7,8,9,10,11,12],
  datasets: [
    {
      label: 'Rainfall',
      fill: true,
      lineTension: 0.5,
      backgroundColor: '#ffc107',
      borderColor: '#ffc107',
      borderWidth: 2,
      data: [1.5,0.5,1.4,1.5,1.2,3.5,1,2,4,1.5,1.2,2.5,1.2]
    },{ label: 'My second dataset',
    backgroundColor: '#1971de',
    borderColor: '#1971de',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: [2,1.5,4,5,2,5,3,2,3,2,3,1,4]}
  ]
}

export default class LineGraph extends React.Component {
  render() {
    return (
      <div>
          <div id="line-graph">
          <h6 style={{backgroundColor:"lightgray",padding:"10px"}}>Youtube Subscribers<img src="https://www.flaticon.com/svg/static/icons/svg/483/483345.svg" style={{height:20,width:20,marginLeft:"55%",opacity:0.3}}/></h6>
          <div id="labels" style={{marginLeft:"25%"}}>
 <div><div style={{height:10,width:10,backgroundColor:"#1971de",borderRadius:"50%"}}></div><span>Desktop</span></div>
           <div><div style={{height:10,width:10,backgroundColor:"#ffc107",borderRadius:"50%"}}></div><span>Mobile</span></div>
           </div> 
             <Line
          data={state}
          options={{
            title:{
              display:false,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
      </div></div>
    );
  }
}