class Halu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // count: 0,
            // users: []
            isLoading: true,
            data: []
        };
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     if (this.state.users.length !== nextState.users.length) {
    //         return true;
    //     }
    //     return false;
    // }
    componentDidUpdate(preProps) {
        if(prevProps.selectedState !== this.props.selectedState){
            fetch('https://pathToApi.com')
            .then(resp => resp.json())
            .then(respJson =>{
                this.setState({
                    isLoading: false,
                    data: respJson,
                });
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}