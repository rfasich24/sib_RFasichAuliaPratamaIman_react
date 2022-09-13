import React from 'react'
class Halu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            users: []
            // isLoading: true,
            // data: []
        };
    }
    shouldComponentUpdate(nextProps, nextState){
        if (this.state.users.length !== nextState.users.length) {
            return true;
        }
        return false;
    }

    componentDidUpdate(preProps) {
        if(prevProps.selectedState !== this.props.selectedState){
            fetch('https://pathToApi.com')
            .then(resp => resp.json())
            .then(respJson =>{
                this.setState({
                    isLoading: false,
                    data: respJson,
                });
                console.log('test')
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.users}</h1>
            </div>
        )
    }
}