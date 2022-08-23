import React, {Component} from 'react';
import './index.css'
import axios from "axios";
import PubSub from 'pubsub-js'

class Search extends Component {
    state = {
        val: '',
    }

    search = () => {
        let val = this.ipt1.value;
        axios.get(`https://api.github.com/search/users?q=${val}`).then(res => {
            if (res.status === 200 && res.data && res.data.items.length > 0) {
                let list = res.data.items;
                PubSub.publish('list', list);
            }
        })
    }

    render() {
        return (
            <div>
                <input type="text" ref={currentNode => this.ipt1 = currentNode}/>
                <button onClick={this.search}>搜索</button>
            </div>
        );
    }
}

export default Search;