import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Mon',"Tue","Wed","Thurs","Fri",'Sat','Sun'],
  datasets: [
    {
        label: 'My First dataset',
        backgroundColor: '#1971de',
        borderColor: 'rgba(255,99,132,1)',
        // borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [400,350,380,360,380,200,400]
      },
      {
        label: 'My second dataset',
        backgroundColor: '#ffc107',
        borderColor: 'rgba(255,99,132,1)',
        // borderWidth: 1,
       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [100,150,250,100,270,130,100]
      }]
}

export default class BarGraph extends React.Component {
  render() {
    const options={
        responsive: true,
        legend: {
            display: false,
        },
        type:'bar',
        
    }
    return (
      <div>
          <div id="bar-graph">
   
          <h6 style={{backgroundColor:"lightgray",padding:"10px",color:"Gray"}}>Country Stats<img src="https://www.flaticon.com/svg/static/icons/svg/892/892630.svg" style={{height:20,width:20,marginLeft:"70%",opacity:0.3}}/><img src="https://www.flaticon.com/svg/static/icons/svg/60/60694.svg" style={{height:20,width:20,marginLeft:"2%",opacity:0.3}}/></h6>
         <div style={{height:200,width:400,margin:"auto"}}>
        <Bar
          data={state}
          style={{height:"10px"}}
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
        /></div> 
     
      <div className="table">
        <table style={{marginLeft:40}}>
          <tr><th>Country</th><th>Sessions</th><th>Goals</th><th>Goals Rate</th><th>Bounce Rate</th></tr>
          <tr><td>canada</td><td>55,555</td>
          <td>201</td>
          <td>246%</td>
          <td>0.26%</td></tr>
          <tr><td>India</td>
          <td>24,152</td>
          <td>135</td>
          <td>0.58%</td>
          <td>0.43%</td></tr>
          <tr><td>Uk</td>
          <td>15,640</td><td>324</td>
          <td>5.15%</td>
          <td>2.47%</td>
          </tr>
          <tr><td>bostwana</td>
          <td>12,148</td>
          <td>854</td>
          <td>4.19%</td>
          <td>0.1%</td></tr>
        </table>
      </div>
      </div> </div>
    );
  }
}