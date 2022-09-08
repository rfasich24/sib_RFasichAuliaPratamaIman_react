import React from "react";
import PropTypes from "prop-types";

//Props dari informasi statis

// class HeroName extends React.Component {
//     render() {
//         return <h3>{this.props.name}</h3>;
//     }
// }

// export default class Hero extends React.Component {
//     render() {
//         return (
//         <>
//             <HeroName name="Fasich02"></HeroName>
//         </>
//         );
//     }
// }

//Props dari state yang dikirim

class HeroName extends React.Component {
    render() {
        return (
            <h3>
                {this.props.detail} : {this.props.name}
            </h3>
        );
    }
}

HeroName.propTypes = {
    name: PropTypes.string,
};

export default class Hero extends React.Component {
    constructor() {
        super();
        this.state = {
            name: true,
        };
    }

    render() {
        return (
            <>
                <HeroName
                    name="Fasich02"
                    detail="Langsung melalui props"
                ></HeroName>
                <HeroName
                    name={this.state.name}
                    detail="Melalui state"
                ></HeroName>
            </>
        );
    }
}
