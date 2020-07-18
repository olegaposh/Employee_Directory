import React, { Component } from 'react';
import Search from '../Search/Search'
import ResultList from '../ResultList/ResultList'
import axios from 'axios'

class SearchContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            search: "",
            results: []
        }
        this.URL = "https://randomuser.me/api/?results=50";

    }

    searchUser = async () => {

        try {
            const result = await axios.get(this.URL)
            // update the state of results

            console.log("hello", result)
            this.setState({ results: result.data.results })
            
            
        } catch (error) {
            console.log(error)
        }
    }

    handleInputChange = event => {

        const {name, value} = event.target
        // console.log(event.target.name)
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {

        this.searchUser();
    }

    // handleclick = event => {
    //     this.state.results.sort(function(dataA, dataB) {
    //         return compareStrings(dataA.name.first, dataB.name.first);
    //       })
    //     }
    // }

    // function compareStrings(a, b) {
    //     // Assuming you want case-insensitive comparison
    //     a = a.toLowerCase();
    //     b = b.toLowerCase();
      
    //     return (a < b) ? -1 : (a > b) ? 1 : 0;
    //   }
      
      

    render() {

        const filteredSearch = this.state.results.filter((data) => {
           
        if(this.state.search === "")
        return data
        else if(data.name.first.toLowerCase().includes(this.state.search.toLowerCase()))
        return data
        else if(data.name.last.toLowerCase().includes(this.state.search.toLowerCase()))
        return data
        
        
    })
    // console.log(filteredSearch)
        return (
            <>
            {/* <button onClick={() => this.handleClick()}
            >SortME!</button> */}
                <Search 
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <ResultList results={filteredSearch} />

            </>

        )

    }
}

export default SearchContainer;