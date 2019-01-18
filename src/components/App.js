import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };
  //1st way
  /*   onSearchSubmit = (term) => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID 23af5b99501be1911b6424e0f8987943566184261d1d0483237f8b5e4294052d"
        }
      })
      .then(response => {
        console.log(response.data.results);
        this.setState({ images: response.data.results });
      });
  } */

  // 2nd way =>
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
