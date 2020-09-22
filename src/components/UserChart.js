import React, { Component } from 'react';

class UserChart extends Component {
    render() {
        return (
            <div>
                <div className="block-container">
            <div className="block" id="visitors">
            <span className="ratings">+10%</span>
            <p className="block-title">Visitors</p>
            <p className="block-number">13.7k</p>
            <p className="block-target">172.498 Target User</p>
            </div>  
            <div className="block" id="bounce-rate">  
            <span className="ratings">+17%</span>    
            <p className="block-title">bounce rate</p>
            <p className="block-number">41.6%</p>
            <p className="block-target">472.458 Targeted Users</p>
            </div>  
            <div className="block" id="users"> 
            <span className="ratings">+10%</span>  
            <p className="block-title">users</p>
            <p className="block-number">19M</p>
            <p className="block-target">172.458 Targeted Users</p>
            </div>    
            <div className="block" id="new-contacts"> 
            <span className="ratings">-5%</span>
            <p className="block-title">New contacts</p>
            <p className="block-number">75</p>
            <p className="block-target">478B Targeted users</p>
      </div></div>
            </div>  );
    }
}

export default UserChart;