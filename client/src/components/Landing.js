import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center', height: "40em" }} >
                <div className="container" style={{ marginTop: "10em", backgroundColor: "white", borderRadius: "50%", padding: "2em"}}>
                    <h2>To Do</h2>
                    <h4 style={{ paddingBottom: "1em" }}>Get shit done</h4>
                </div>
                
            </div>
        );
    }
}

export default Landing;
