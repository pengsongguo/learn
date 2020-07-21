import React from 'react';

 class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.myRef);
    }





    render() {
        return (
            <div>
                <input type="text" ref={this.myRef} defaultValue={'asdf'}/>
            </div>
        );
    }
}


export default Clock;
